import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  imports: [RouterLink],
})
export class ArticleCardComponent {
  article = input<any>();
}
