import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private translate: TranslateService) {
    // Set default language
    translate.setDefaultLang('it');

    // Optionally, set the language based on the browser language
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|it/) ? browserLang : 'it');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
