import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../core/services/article/article-service';
import { ArticleModel } from '../../../core/models/article-model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { FormsModule } from '@angular/forms';
import { FilterArticleByTitlePipe } from "../../../shared/pipes/filter-article-by-title-pipe";

@Component({
  selector: 'app-article-list',
  imports: [CommonModule, RouterLink, FormsModule, FilterArticleByTitlePipe],
  templateUrl: './article-list.html',
  styleUrl: './article-list.css',
})
export class ArticleList implements OnInit {
  articles: ArticleModel[] = [];
  selectedArticle: ArticleModel | null = null;
  filterTable: any = '';

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.loadArticles();
    initFlowbite();
  }

  loadArticles(): void {
    this.articleService.getAllArticles().subscribe({
      next: (dataRes) => (this.articles = dataRes),
      error: (err) =>
        console.error('Error al cargar lista de articulos: ', err),
    });
  }

  confirmDeleteArticle(): void {
    if (this.selectedArticle) {
      this.deleteArticle(this.selectedArticle);
    }
  }

  deleteArticle(article: ArticleModel): void {
    this.articleService.deleteArticleById(article.id).subscribe({
      next: (dataRes) => {
        console.log(dataRes);
        this.articles = this.articles.filter((a) => a.id !== article.id);
      },
      error: (err) => console.error('Error al eliminar articulo: ' + err),
    });
  }
}
