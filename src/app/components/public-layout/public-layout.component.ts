import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  imports: [NavbarComponent, RouterOutlet],
})
export class PublicLayoutComponent {
  currentYear = new Date().getFullYear();
}
