import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ArticleService } from '../../../core/services/article/article-service';
import { Router, RouterLink } from '@angular/router';
import { noFutureDateValidator } from '../../../core/validators/date-validators';


@Component({
  selector: 'app-article-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './article-form.html',
  styleUrl: './article-form.css',
})
export class ArticleForm {
  articleForm: FormGroup;

  constructor(
    private articleService: ArticleService,
    private route: Router,
    private fb: FormBuilder
  ) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      totalPages: ['', [Validators.required, Validators.min(1)]],
      publicationDate: ['', [Validators.required, noFutureDateValidator()]],
    });
  }

  saveArticle(): void {
    if (this.articleForm.valid) {
      this.articleService.saveArticle(this.articleForm.value).subscribe({
        next: (dataRes) => {
          if (dataRes) {
            this.route.navigate(['/articles']);
          }
        },
        error: (err) => console.error('Error al cargar articulo: ' + err),
      });
    }
  }
}
