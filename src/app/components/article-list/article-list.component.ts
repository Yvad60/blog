import { Component, input, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { ArticlesService } from '../../services/articles.service';
import { type Article } from '../../types/dtos';
import { ArticleCardComponent } from '../article-card/article-card.component';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  imports: [ArticleCardComponent],
})
export class ArticleListComponent implements OnInit, OnDestroy {
  classes = input('');
  articles: Article[] = [];
  isLoading = false;
  errorMessage = '';
  subscription: Subscription | undefined;

  constructor(private readonly articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.subscription = this.articlesService
      .fetchAllArticles()
      .pipe(
        map((data) =>
          data.filter((article) => !article.title.startsWith('Day'))
        )
      )
      .subscribe((data) => {
        this.articles = data;
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
