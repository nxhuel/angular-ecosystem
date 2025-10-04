import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '../../../core/models/article-model';
import { ArticleService } from '../../../core/services/article/article-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  imports: [],
  templateUrl: './article-details.html',
  styleUrl: './article-details.css'
})
export class ArticleDetails implements OnInit {
  articleSelected?: ArticleModel;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadArticle();
  }

  loadArticle(): void {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.articleService.getArticleById(id).subscribe({
        next: (dataRes) => this.articleSelected = dataRes,
        error: (err) => console.error("Error al cargar articulo: ", err)
      })
    }
  }
}
