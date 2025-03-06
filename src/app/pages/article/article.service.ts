import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private readonly http: HttpClient) {}

  fetchArticles(articleSlug: string): Observable<any> {
    return this.http.get(
      `https://dev.to/api/articles/ivadyhabimana/${articleSlug}`
    );
  }
}
