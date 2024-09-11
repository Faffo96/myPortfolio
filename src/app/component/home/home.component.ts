import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NgbAlertModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Esegui questo codice solo se è in un ambiente browser
      this.renderer.addClass(document.body, 'no-scroll');
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Rimuovi la classe solo se è in un ambiente browser
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }
}