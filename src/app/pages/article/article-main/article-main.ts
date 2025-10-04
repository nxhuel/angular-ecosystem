import { Component } from '@angular/core';
import { ArticleList } from "../article-list/article-list";

@Component({
  selector: 'app-article-main',
  imports: [ArticleList],
  templateUrl: './article-main.html',
  styleUrl: './article-main.css'
})
export class ArticleMain {

}
