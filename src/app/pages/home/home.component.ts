import { Component } from '@angular/core';
import { ArticleCategorizationComponent } from '../../components/article-categorization/article-categorization.component';
import { ArticleListComponent } from '../../components/article-list/article-list.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    NavbarComponent,
    ArticleListComponent,
    ArticleCategorizationComponent,
  ],
})
export class HomeComponent {}
