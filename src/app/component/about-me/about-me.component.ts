import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as emailjs from 'emailjs-com';
import { environment } from '../../../environments/environment';
import { NgClass, NgIf } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [FormsModule, HttpClientModule, NgClass, NgIf, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  private modalService = inject(NgbModal);
  private http = inject(HttpClient);
  closeResult = '';
  isSubmitting = false;  // Stato del pulsante di invio
  responseMessage: string | null = null;  
  isSuccess = false; 
  private securityToken = environment.SECURITY_TOKEN;

  form: any = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private translate: TranslateService) {}

    /* private apiUrl = 'http://localhost:8080/api/mail/send';  */
 private apiUrl = 'https://mail-sender-9oiy.onrender.com/api/mail/send';
  

 sendEmail(e: Event) {
    e.preventDefault();  // Previeni il comportamento predefinito del form

    this.isSubmitting = true;  // Disabilita il pulsante

    this.http.post(this.apiUrl, this.form, {
      headers: new HttpHeaders({
          'Authorization': this.securityToken || ''
      }),
      observe: 'response'  // Ottieni l'intera risposta
    }).subscribe(
      response => {
        if (response.status === 200) {
          // Successo
          this.isSuccess = true;
          this.translate.get('SUCCESS_MESSAGE').subscribe((res: string) => {
            this.responseMessage = res;
          });
          /* this.responseMessage = 'Email successfully sent'; */
          setTimeout(() => {
            this.closeModal();
          }, 2000); 
        } else {
          // Status code diverso da 200
          this.isSuccess = false;
          this.translate.get('ERROR_MESSAGE').subscribe((res: string) => {
            this.responseMessage = res;
          });
          /* this.responseMessage = `Unexpected status code: ${response.status}`; */
        }
        this.isSubmitting = false;  // Riabilita il pulsante
      },
      error => {
        console.error('Failed to send email:', error);
        this.isSuccess = false;
        this.translate.get('ERROR_MESSAGE').subscribe((res: string) => {
          this.responseMessage = res;
        });
        /* this.responseMessage = 'Failed to send email, please try again'; */
        this.isSubmitting = false;  // Riabilita il pulsante
      }
    );
  }
  

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
        this.isSubmitting = false;  // Riabilita il pulsante quando il modal viene riaperto
        this.responseMessage = null;  // Resetta il messaggio di risposta
        this.isSuccess = false;  // Resetta lo stato di successo
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        this.isSubmitting = false;  // Riabilita il pulsante quando il modal viene chiuso
        this.responseMessage = null;  // Resetta il messaggio di risposta
        this.isSuccess = false;  // Resetta lo stato di successo
      },
    );
  }

  private closeModal() {
    this.modalService.dismissAll();  // Chiudi tutte le modali aperte
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}