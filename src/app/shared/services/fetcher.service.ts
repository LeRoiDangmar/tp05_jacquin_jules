import { Injectable} from '@angular/core';
import { ArticlePreview } from '../models/articlePreview.model';
import { ArticleFull } from '../models/articleFull.model';
import { Categorie } from '../models/categorie.model';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  constructor(private http: HttpClient) { }

  // Cette fonction renvoie toute les preview de produit
  public fetchArticlePreview(ids: number[]): Observable<ArticlePreview[]> {
      return this.http.get<ArticlePreview[]>(environment.backendClientProduits).pipe(
        map(items => items.filter(item => ids.includes(item.id)))
    );
  }
  // renvoie les articles en avant
  public fetchFeaturedArticles(): Observable<ArticlePreview[]> {
    return this.http.get<ArticlePreview[]>(environment.backendClientProduits).pipe(
      map(items => items.filter(item=> item.en_avant == true))
    );
  }
  
  // Cette fonction renvoie toutes les infos d'un article
  public fetchArticleFull(id: number): Observable<ArticleFull> {
    return this.http.get<ArticleFull[]>(environment.backendClientProduits).pipe(
      map(items => {
        const item = items.find(item => item.id === id);
        if (item) {
          return item;
        } else {
          throw new Error(`Article with id ${id} not found`);
        }
      })
    );
  }

  // renvoie les articles pour une categorie donnée
  public fetchArticleByCategorie(cat: number): Observable<ArticlePreview[]> {
    return this.http.get<ArticlePreview[]>(environment.backendClientProduits).pipe(
      map(items => items.filter(item => item.id_categorie == cat))
    )
  }

  // renvoie les catégories
  public fetchCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(environment.backendClientCategories).pipe(
      map(items => items.filter(item => items))
    )
  }

}
