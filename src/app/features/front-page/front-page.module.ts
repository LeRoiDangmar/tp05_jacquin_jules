import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedComponent } from './featured/featured.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';

const routes: Routes = [
  { path: '', component: FeaturedComponent },
  { path: 'categorie/:id', component: CategorieComponent}
];

@NgModule({
  declarations: [
    ArticlePreviewComponent,
    CategorieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
    CommonModule
  ]
})
export class FrontPageModule { }
