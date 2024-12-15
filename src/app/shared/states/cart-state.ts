import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
  createSelector,
} from '@ngxs/store';
import { AddArticle, DelArticle } from '../actions/cart-action';
import { CartStateModel } from './cart-state.model';
import { ArticlePreview } from '../models/articlePreview.model';
@State<CartStateModel>({
  name: 'articles',
  defaults: {
    articles: [],
  },
})
@Injectable()
export class CartState {
  @Selector()
  static getNbArticles(state: CartStateModel) {
    return state.articles.length;
  }
  @Selector()
  static getListeArticles(state: CartStateModel) {
    console.log(state.articles);
    return state.articles;
  }

  @Action(AddArticle)
  add(
    { getState, patchState }: StateContext<CartStateModel>,
    { payload }: AddArticle
  ) {
    const state = getState();
    patchState({
      articles: [...state.articles, payload],
    });
  }

  @Action(DelArticle)
  del(
    { getState, patchState }: StateContext<CartStateModel>,
    { payload }: DelArticle
  ) {
    const state = getState();
    patchState({
      articles: state.articles.filter(
        (x) => !(payload.nom == x.nom && payload.id == x.id)
      ),
    });
  }
}
