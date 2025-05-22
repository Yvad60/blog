import { Component } from '@angular/core';
import { ArticleCategorizationComponent } from '../../components/article-categorization/article-categorization.component';
import { ArticleListComponent } from '../../components/article-list/article-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [ArticleListComponent, ArticleCategorizationComponent],
})
export class HomeComponent {}
