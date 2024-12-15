import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngxs/store';
import { inject } from '@angular/core';
import { ArticlePreview } from '../../../shared/models/articlePreview.model';
import { DelArticle } from '../../../shared/actions/cart-action';
import { CartState } from '../../../shared/states/cart-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  constructor(private store: Store) {}

  liste$: Observable<ArticlePreview[]> = inject(Store).select(CartState.getListeArticles);
  ngOnInit() {
  }

  delContact(c: ArticlePreview): void {
    this.store.dispatch(new DelArticle(c));
  }

  liste(){
    console.log(this.liste$);
  }
}
