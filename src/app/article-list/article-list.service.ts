import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private readonly DEV_TO_ARTICLES_API_URL =
    'https://dev.to/api/articles?username=ivadyhabimana';

  constructor(private readonly http: HttpClient) {}

  fetchArticles(): Observable<any[]> {
    return this.http.get<any[]>(this.DEV_TO_ARTICLES_API_URL);
  }
}
