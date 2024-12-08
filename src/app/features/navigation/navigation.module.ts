import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchbarComponent } from './menu/searchbar/searchbar.component';
import { CategoriesComponent } from './menu/categories/categories.component';
import { CardsComponent } from './menu/cards/cards.component';

const routes: Routes = [
  { path: '', component: MenuComponent }
];

@NgModule({
  declarations: [
    MenuComponent,
    SearchbarComponent,
    CategoriesComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MenuComponent,
    RouterModule,
    SearchbarComponent,
    CategoriesComponent,
    CardsComponent
  ]
})
export class NavigationModule { }
