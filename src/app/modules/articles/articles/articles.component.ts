import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/articles.service';
import { ArticleBasicInfo, ArticlesResponse, Author } from 'app/models/general.interfaces';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: any = [];
  articlesCarousel: ArticleBasicInfo[] = [];
  authors: Author[] = [];
  constructor(
    private articleService: ArticleService) {}
  ngOnInit() {
    this.articleService.getArticles().subscribe((res: ArticlesResponse) => {
    this.articles = res.articles;
    this.authors = res.authors!;
    this.articlesCarousel = this.articles.slice(0,2);
    })

  }
}
