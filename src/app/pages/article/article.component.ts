import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { Subscription } from 'rxjs';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  imports: [MarkdownComponent],
})
export class ArticleComponent implements OnInit {
  articleSubscription: Subscription | undefined;
  articleHtml = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService
  ) {}
  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    if (!articleId) return;
    this.articleSubscription = this.articleService
      .fetchArticles(articleId)
      .subscribe((data) => {
        console.log(data);
        this.articleHtml = data.body_markdown;
      });

    console.log('ArticleComponent initialized', articleId);
  }
}
