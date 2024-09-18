import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { NgClass, CommonModule } from '@angular/common';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateConfigModule } from '../../module/translate-config.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    NgbDropdownModule, 
    NgClass, 
    NgbCollapseModule,
    TranslateModule,
    TranslateConfigModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentRoute: string = '';
  @Output() navbarToggled = new EventEmitter<boolean>();
  isNavbarCollapsed = true;
  isMobile = false;

  constructor(private router: Router, private translate: TranslateService) {
    // Configurazione delle lingue
    translate.addLangs(['it', 'en']);
    translate.setDefaultLang('it');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|it/) ? browserLang : 'it');

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentRoute = this.router.url;
      // Chiudi la navbar se l'utente cambia rotta su mobile
      if (this.isMobile) {
        this.isNavbarCollapsed = true;
      }
    });

    this.checkIfMobile();
  }

  toggleNavbar() {
    // Toggle solo su dispositivi mobili
    if (this.isMobile) {
      this.isNavbarCollapsed = !this.isNavbarCollapsed;
      this.navbarToggled.emit(!this.isNavbarCollapsed);
    }
  }

  isActive(route: string): boolean {
    return this.currentRoute.startsWith(route);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  checkIfMobile() {
    this.isMobile = window.innerWidth < 992;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkIfMobile();
  }
}
