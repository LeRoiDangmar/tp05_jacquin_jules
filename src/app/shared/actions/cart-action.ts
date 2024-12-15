import { ArticlePreview } from "../models/articlePreview.model";

export class AddArticle {
  static readonly type = '[Article] Add';

  constructor(public payload: ArticlePreview) {  console.log(payload);}
}

export class DelArticle {
  static readonly type = '[Article] Del';

  constructor(public payload: ArticlePreview) {}
}
