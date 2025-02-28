import { Component, input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { ArticleService } from './article-list.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  imports: [ArticleCardComponent],
})
export class ArticleListComponent implements OnInit, OnDestroy {
  classes = input('');
  articles: any = [];
  isLoading = false;
  errorMessage = '';
  subscription: Subscription | undefined;

  constructor(private readonly articleService: ArticleService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.subscription = this.articleService
      .fetchArticles()
      .subscribe((data) => {
        console.log(data);
        this.articles = data;
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
