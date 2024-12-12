import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
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
    CardsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterOutlet
  ],
  exports: [
    MenuComponent,
    RouterModule,
    SearchbarComponent,
    CategoriesComponent,
    CardsComponent,
    RouterOutlet
  ]
})
export class NavigationModule { }
