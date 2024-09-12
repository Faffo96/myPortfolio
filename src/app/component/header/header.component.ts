import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { NgClass, CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateConfigModule } from '../../module/translate-config.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    NgbDropdownModule, 
    NgClass, 
    TranslateModule,
    TranslateConfigModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentRoute: string = '';

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
    });

  }

  isActive(route: string): boolean {
    return this.currentRoute.startsWith(route);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
