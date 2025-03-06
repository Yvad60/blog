import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DEV_TO_ARTICLES_API_URL } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private readonly http: HttpClient) {}

  fetchArticles(): Observable<any[]> {
    return this.http.get<any[]>(DEV_TO_ARTICLES_API_URL);
  }
}
