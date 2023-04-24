import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleBasicInfo, ArticlesResponse } from 'app/models/general.interfaces';
import { HomeService } from '../services/home.service';
import {DOCUMENT} from '@angular/common';
import { AppComponent } from 'app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  articles: any = [];
  articlesCarousel: ArticleBasicInfo[] = [];
  blueBackground:string = "./../../../../assets/Fondo_bueno_azul.png";
  grayBackground:string = "./../../../../assets/Fondo_bueno_gris.png";
  purpleBackground:string = "./../../../../assets/Fondo_bueno_violeta.png";
  image: string = this.blueBackground;

  constructor(
    private router: Router,
    private homeService: HomeService,
    @Inject(DOCUMENT) private document: Document
    ) {}
  async ngOnInit() {
    this.homeService.getArticles().subscribe((res: ArticlesResponse) => {
    this.articles = res.articles;
    this.articlesCarousel = this.articles.slice(0,2);
    })
    if(this.document.documentElement.classList.contains(AppComponent.VIOLET_THEME)) {
      this.image = this.purpleBackground;
    } else if (this.document.documentElement.classList.contains(AppComponent.GRAY_THEME)) {
      this.image = this.grayBackground;
    } else {
      this.image = this.blueBackground;
    }
  }
  evaluateButton(): void {
    this.redirectTo('/evaluate');
  }
  heuristicsButton(): void {
    this.redirectTo('/heuristics-list');
  }
  goToAbout(): void {
    this.redirectTo('/about');
  }
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate([uri]));
  }
}
