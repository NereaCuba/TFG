import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleBasicInfo, ArticlesResponse } from 'app/models/general.interfaces';
import { DetailArticleService } from '../services/articles-detail.service';

@Component({
  selector: 'app-articles-detail',
  templateUrl: './articles-detail.component.html',
  styleUrls: ['./articles-detail.component.scss']
})
export class ArticlesDetailComponent {
  _listArticles: ArticlesResponse = {};
  _article: ArticleBasicInfo = {} as ArticleBasicInfo;
    constructor (
    private detailArticleService: DetailArticleService,
    private route: ActivatedRoute,
    private router: Router
    ) {}
  async ngOnInit() {
    let value = this.route.snapshot.queryParams['articleID'];
    this._listArticles = await this.detailArticleService.getArticles().toPromise();
    this._article = this._listArticles!.articles!.find(heuristic => heuristic.id == value)!;    
  }
  redirectTo(uri: string, additionalInfo?: any) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate([uri], {queryParams: {heuristicID: additionalInfo}}));
  }
  heuristicInformationShow(value?: any) {
    this.redirectTo('/articles-detail', value?.id);
  }
}
