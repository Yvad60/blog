import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroRss } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-navbar',
  imports: [NgIcon],
  templateUrl: './navbar.component.html',
  viewProviders: [provideIcons({ heroRss })],
})
export class NavbarComponent {
  navLinks = ['Categories', 'Goodies', 'About'];
}
