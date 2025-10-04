import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleModel, ArticleRequestModel } from '../../models/article-model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private baseUrl: string = environment.articleApi;

  constructor(private http: HttpClient) {}

  saveArticle(article: ArticleRequestModel): Observable<ArticleModel> {
    return this.http.post<ArticleModel>(this.baseUrl, article);
  }

  getAllArticles(): Observable<ArticleModel[]> {
    return this.http.get<ArticleModel[]>(this.baseUrl);
  }

  getArticleById(id: number): Observable<ArticleModel> {
    return this.http.get<ArticleModel>(`${this.baseUrl}/${id}`);
  }

  patchArticleById(id: number, article: Partial<ArticleRequestModel>): Observable<ArticleModel> {
    return this.http.patch<ArticleModel>(`${this.baseUrl}/${id}`, article);
  }

  deleteArticleById(id: number): Observable<string> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
