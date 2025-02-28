import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-card',
  imports: [],
  templateUrl: './article-card.component.html',
})
export class ArticleCardComponent implements OnInit {
  article = input<any>();
  title = '';
  description = '';

  ngOnInit(): void {
    this.title = this.article().title;
    this.description = this.article().description;
  }
}
