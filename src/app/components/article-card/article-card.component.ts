import { Component, input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
})
export class ArticleCardComponent {
  article = input<any>();

  openArticle(url: string) {
    window.open(url, '_blank');
  }
}
