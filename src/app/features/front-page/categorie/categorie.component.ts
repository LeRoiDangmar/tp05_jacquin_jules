import { Component } from '@angular/core';
import { FetcherService } from '../../../shared/services/fetcher.service';
import { Subscription } from 'rxjs';
import { ArticlePreview } from '../../../shared/models/articlePreview.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Categorie } from '../../../shared/models/categorie.model';

@Component({
  selector: 'app-categorie',
  standalone: false,
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css'
})
export class CategorieComponent {

  categorie: string | null = null;
  infoCategorie: Categorie = {id: 'null', libelle: 'null', description: 'null'};


  constructor(private fetcherService: FetcherService, private route: ActivatedRoute){}
  private subscription: Subscription = new Subscription();

  articles: ArticlePreview[] = [];

  ngOnInit() {
    const routeSubscription = this.route.paramMap.subscribe((params: ParamMap) => {
      const newCategorie = params.get('id');
      if (newCategorie !== this.categorie) {
        this.categorie = newCategorie;
        this.FetchArticles();
        this.FetchCategorie();

      }
    });

    this.subscription.add(routeSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  FetchCategorie(){
    const fetchSubscription = this.fetcherService.fetchOneCategorie(this.categorie || 'erreur').subscribe({
      next: (data) => {
        this.infoCategorie = data;
      },
      error: (error) => {
        console.error('Error fetching categorie:', error);
      }
    });
    this.subscription.add(fetchSubscription);
  }

  FetchArticles(){
    const fetchSubscription = this.fetcherService.fetchArticleByCategorie(this.categorie || 'erreur').subscribe({
      next: (data) => {
        this.articles = data;
      },
      error: (error) => {
        console.error('Error fetching articles:', error);
      }
    });
    this.subscription.add(fetchSubscription);
  }
}
