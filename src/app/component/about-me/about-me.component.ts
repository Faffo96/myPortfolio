import { HttpClientModule } from '@angular/common/http';
import { Component, inject, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as emailjs from 'emailjs-com';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  private modalService = inject(NgbModal);
	closeResult = '';

  form: any = {
    name: '',
    email: '',
    message: ''
  };

  private serviceId = environment.EMAILJS_SERVICE_ID
  private templateId = environment.EMAILJS_TEMPLATE_ID;
  private userId = environment.EMAILJS_USER_ID;

  sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm(this.serviceId, this.templateId, e.target as HTMLFormElement, this.userId)
      .then((result) => {
        console.log('Email successfully sent:', result.text);
      }, (error) => {
        console.error('Failed to send email:', error.text);
      });
  }
 

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
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