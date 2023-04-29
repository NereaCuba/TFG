import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleBasicInfo, ArticlesResponse } from 'app/models/general.interfaces';
import { DetailArticleService } from '../services/articles-detail.service';
import AOS from "aos";

@Component({
  selector: 'app-articles-detail',
  templateUrl: './articles-detail.component.html',
  styleUrls: ['./articles-detail.component.scss']
})
export class ArticlesDetailComponent {
  _listArticles: ArticlesResponse = {};
  _article: ArticleBasicInfo = {} as ArticleBasicInfo;
  loading:boolean = true;
  loaded:boolean = false;
    constructor (
    private detailArticleService: DetailArticleService,
    private route: ActivatedRoute,
    private router: Router
    ) {}
  async ngOnInit() {
    this.loading = true;
    this.loaded = false;
    let value = this.route.snapshot.queryParams['articleID'];
    this._listArticles = await this.detailArticleService.getArticles().toPromise();
    this._article = this._listArticles!.articles!.find(heuristic => heuristic.id == value)!; 
    AOS.init();
    this.loading = false;
    this.loaded = true;
  }
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: false}).then(() =>
    this.router.navigate([uri]));
  }
}
