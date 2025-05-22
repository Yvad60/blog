import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { Subscription } from 'rxjs';
import { ArticlesService } from '../../services/articles.service';

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
    private readonly articlesService: ArticlesService
  ) {}
  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    if (!articleId) return;
    this.articleSubscription = this.articlesService
      .fetchArticleBySlug(articleId)
      .subscribe((data) => {
        // @ts-expect-error body_markdown is not in the type
        this.articleHtml = data.body_markdown;
      });
  }
}
