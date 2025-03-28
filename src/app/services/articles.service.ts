import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DEV_API_URL, DEV_USERNAME } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private readonly http: HttpClient) {}

  fetchAllArticles(): Observable<any[]> {
    const allArticlesApiUrl = `${DEV_API_URL}/articles?username=${DEV_USERNAME}`;

    return this.http.get<any[]>(allArticlesApiUrl);
  }

  fetchArticleBySlug(articleSlug: string): Observable<any> {
    const articleApiUrl = `${DEV_API_URL}/articles/${DEV_USERNAME}/${articleSlug}`;

    return this.http.get(
      articleApiUrl
    );
  }
}
