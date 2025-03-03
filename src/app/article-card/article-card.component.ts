import { Component, input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  imports: [],
  templateUrl: './article-card.component.html',
})
export class ArticleCardComponent {
  article = input<any>();
}
