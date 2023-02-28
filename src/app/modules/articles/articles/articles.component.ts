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
  articlesStatic: any = [];
  articlesCarousel: ArticleBasicInfo[] = [];
  authors: Author[] = [];
  data: string = '';
  constructor(
    private articleService: ArticleService) {}
  ngOnInit() {
    this.articleService.getArticles().subscribe((res: ArticlesResponse) => {
    this.articles = res.articles;
    this.articlesStatic = res.articles;
    this.authors = res.authors!;
    this.articlesCarousel = this.articles.slice(0,2);
    })
  }
  filterByName() {
    this.articles = this.articlesStatic.filter((element:any) => {
      if(element.title!.toLowerCase().indexOf(this.data.toLowerCase()) > -1) {
        return element;
      }
    });
  }
}
