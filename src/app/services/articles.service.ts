import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DEV_API_URL, DEV_USERNAME } from '../constants';
import { type Article } from '../types/dtos';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private readonly http: HttpClient) {}

  fetchAllArticles(): Observable<Article[]> {
    const allArticlesApiUrl = `${DEV_API_URL}/articles?username=${DEV_USERNAME}&per_page=500`;
    return this.http.get<Article[]>(allArticlesApiUrl);
  }

  fetchArticleBySlug(articleSlug: string): Observable<Article> {
    const articleApiUrl = `${DEV_API_URL}/articles/${DEV_USERNAME}/${articleSlug}`;
    return this.http.get<Article>(articleApiUrl);
  }
}
