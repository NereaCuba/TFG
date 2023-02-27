import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleBasicInfo, ArticlesResponse } from 'app/models/general.interfaces';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  articles: any = [];
  articlesCarousel: ArticleBasicInfo[] = [];
  constructor(
    private router: Router,
    private homeService: HomeService) {}
  ngOnInit() {
    this.homeService.getArticles().subscribe((res: ArticlesResponse) => {
    this.articles = res.articles;
    console.log(res);
    this.articlesCarousel = this.articles.slice(0,2);
    })

  }
  evaluateButton(): void {
    this.redirectTo('/evaluate', "");
  }
  goToAbout(): void {
    this.redirectTo('/about', "");
  }
  redirectTo(uri: string, additionalInfo?: any) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate([uri], {queryParams: {title: additionalInfo}}));
  }
}
