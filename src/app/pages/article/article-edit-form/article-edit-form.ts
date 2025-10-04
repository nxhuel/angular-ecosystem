import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ArticleService } from '../../../core/services/article/article-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ArticleModel } from '../../../core/models/article-model';
import { noFutureDateValidator } from '../../../core/validators/date-validators';

@Component({
  selector: 'app-article-edit-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './article-edit-form.html',
  styleUrl: './article-edit-form.css',
})
export class ArticleEditForm implements OnInit {
  articleForm: FormGroup;
  articleSelected?: ArticleModel;

  constructor(
    private articleService: ArticleService,
    private route: Router,
    private paramsRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.articleForm = this.fb.group({
      title: [''],
      description: [''],
      totalPages: ['', Validators.min(1)],
      publicationDate: ['', noFutureDateValidator()],
    });
  }

  ngOnInit(): void {
    const id = this.paramsRoute.snapshot.paramMap.get('id');
    if (id) {
      this.articleService.getArticleById(+id).subscribe({
        next: (article) => {
          this.articleForm.patchValue(article);
          this.articleSelected = article;
        },
        error: (err) => console.error('Error al cargar artículo:', err),
      });
    }
  }

  saveUpdatedArticle(): void {
    if (this.articleForm.valid) {
      const id = this.paramsRoute.snapshot.paramMap.get('id');
      if (id) {
        this.articleService
          .patchArticleById(+id, this.articleForm.value)
          .subscribe({
            next: () => {
              console.log('Articulo actualizado correctamente');
              this.route.navigate(['/articles']);
            },
            error: (err) =>
              console.error('Error al actualizar articulo: ' + err),
          });
      }
    }
  }
}
