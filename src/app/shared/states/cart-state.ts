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
export class ContactState {
  @Selector()
  static getNbContacts(state: ContactStateModel) {
    return state.contacts.length;
  }
  @Selector()
  static getNbContactsFavoris(fav: boolean) {
    return createSelector([ContactState], (state: ContactStateModel) => {
      return state.contacts.filter((c) => c.favoris == fav).length;
    });
  }
  @Selector()
  static getListeContacts(state: ContactStateModel) {
    return state.contacts;
  }

  @Selector()
  static getFavorisContacts(state: ContactStateModel) {
    return state.contacts.filter((x) => x.favoris);
  }

  @Action(AddContact)
  add(
    { getState, patchState }: StateContext<ContactStateModel>,
    { payload }: AddContact
  ) {
    const state = getState();
    patchState({
      contacts: [...state.contacts, payload],
    });
  }

  @Action(DelContact)
  del(
    { getState, patchState }: StateContext<ContactStateModel>,
    { payload }: DelContact
  ) {
    const state = getState();
    patchState({
      contacts: state.contacts.filter(
        (x) => !(payload.nom == x.nom && payload.prenom == x.prenom)
      ),
    });
  }
}
