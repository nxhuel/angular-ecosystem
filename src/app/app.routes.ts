import { Routes } from '@angular/router';
import { ArticleMain } from './pages/article/article-main/article-main';
import { HomeMain } from './pages/home/home-main/home-main';
import { ArticleDetails } from './pages/article/article-details/article-details';
import { ArticleForm } from './pages/article/article-form/article-form';
import { ArticleEditForm } from './pages/article/article-edit-form/article-edit-form';

export const routes: Routes = [
  { path: '', component: HomeMain },
  {
    path: 'articles',
    component: ArticleMain,
  },
  {
    path: 'articles-form',
    component: ArticleForm
  },
  {
    path: 'articles/:id',
    component: ArticleDetails
  },
  {
    path: 'articles-edit-form/:id',
    component: ArticleEditForm
  },
  { path: '', redirectTo: '', pathMatch: 'full' }, // Redirección por defecto
  { path: '**', redirectTo: '' }, // Ruta comodín (404)
];
