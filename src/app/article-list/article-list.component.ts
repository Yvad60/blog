import { Component, input } from '@angular/core';
import { ArticleCardComponent } from '../article-card/article-card.component';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  imports: [ArticleCardComponent],
})
export class ArticleListComponent {
  classes = input('');

  articles = Array(5)
}
