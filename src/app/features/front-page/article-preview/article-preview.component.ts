import { Component, Input } from '@angular/core';
import { ArticlePreview } from '../../../shared/models/articlePreview.model';

@Component({
  selector: 'app-article-preview',
  standalone: false,
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.css'
})
export class ArticlePreviewComponent {

  @Input() article!: ArticlePreview;
  link: string = "/article";

  ngOnInit(){
    console.log(this.link)
    console.log(this.article.id)

  }
}
