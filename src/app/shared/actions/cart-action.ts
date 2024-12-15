import { ArticlePreview } from "../models/articlePreview.model";

export class AddArticle {
  static readonly type = '[ArticlePreview] Add';

  constructor(public payload: ArticlePreview) {}
}

export class DelArticle {
  static readonly type = '[ArticlePreview] Del';

  constructor(public payload: ArticlePreview) {}
}
