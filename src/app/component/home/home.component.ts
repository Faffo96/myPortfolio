import { isPlatformBrowser, NgClass } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, inject, Inject, OnDestroy, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../environments/environment';
import { TranslateConfigModule } from '../../module/translate-config.module';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NgbAlertModule, HttpClientModule, TranslateModule, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private http = inject(HttpClient);
  responseMessage: string | null = null; 
  isNavbarOpen = false;
  /* private securityToken = environment.SECURITY_TOKEN; */
  private securityToken2 = environment.securityToken;

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: object) {

  }

private mailApiUrl = environment.mailApiUrl;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Esegui questo codice solo se è in un ambiente browser
      this.renderer.addClass(document.body, 'no-scroll');
    }

    console.log('SECURITY_TOKEN:', environment.SECURITY_TOKEN);
console.log('SECURITY TOKEN 2: ' + environment.securityToken)
      
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Rimuovi la classe solo se è in un ambiente browser
      this.renderer.removeClass(document.body, 'no-scroll');
    }

    this.sendFakeEmail();
  
      // Esegui la funzione ogni 14 minuti (840.000 millisecondi)
      setInterval(() => {
        this.sendFakeEmail();
      }, 840000);
  }

  onNavbarToggled(isOpen: boolean) {
    this.isNavbarOpen = isOpen;
  }

  sendFakeEmail() {
    const newForm = {
      to: 'fabioscar96@gmail.com',
      name: 'abcdef',
      email: '',
      message: ''
    };

    /* const securityToken = process.env['SECURITY_TOKEN'];
    console.log(securityToken) */
  
    this.http.post(this.mailApiUrl, newForm, {
      /* headers: new HttpHeaders({
        'Authorization': securityToken || ''
      }), */
      observe: 'response'
    }).subscribe(
      response => {
        if (response.status === 200) {
          this.responseMessage = 'Fake Email successfully sent (it should be not)';
        } else {
          console.log(`Unexpected status code: ${response.status}`);
          this.responseMessage = `Unexpected status code: ${response.status}`;
        }
      },
      error => {
        console.error('Failed to send email:', error);
        if (error.status === 400) {
          this.responseMessage = 'Failed to send email: ' + (error.error?.message || 'Unknown error');
        } else {
          this.responseMessage = 'An unexpected error occurred';
        }
      }
    );
  }
}