import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/articles.service';
import { ArticleBasicInfo, ArticlesResponse, Author } from 'app/models/general.interfaces';
import { Router } from '@angular/router';
import AOS from "aos";

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
  loading:boolean = true;
  loaded:boolean = false;
  constructor(
    private articleService: ArticleService,
    private router: Router) {}
  ngOnInit() {
    this.loading = true;
    this.loaded = false;
    this.articleService.getArticles().subscribe((res: ArticlesResponse) => {
    this.articles = res.articles;
    this.articlesStatic = res.articles;
    this.authors = res.authors!;
    this.articlesCarousel = this.articles.slice(0,2);
    this.loading = false;
    this.loaded = true;
    AOS.init();
    })
  }
  filterByName() {
    this.articles = this.articlesStatic.filter((element:any) => {
      if(element.title!.toLowerCase().indexOf(this.data.toLowerCase()) > -1) {
        return element;
      }
    });
  }
  redirectTo(uri: string, additionalInfo?: any) {
    this.router.navigateByUrl('/', {skipLocationChange: false}).then(() =>
    this.router.navigate([uri], {queryParams: {articleID: additionalInfo}}));
  }
  articleShowInformation(value?: any) {
    this.redirectTo('/articles-detail', value?.id);
  }
}
