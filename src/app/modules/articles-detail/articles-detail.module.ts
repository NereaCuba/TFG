import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {PaginatorModule} from 'primeng/paginator';
import { ArticlesDetailComponent } from './articles-detail/articles-detail.component';
import { articlesDetailRoutingModule } from './articles-detail-routing.module';
import {TooltipModule} from 'primeng/tooltip';
import { TitleModule } from 'app/components/titles/titles.module';
import { DetailArticleService } from './services/articles-detail.service';
import { ScrollTopModule } from 'primeng/scrolltop';

@NgModule({
  declarations: [
    ArticlesDetailComponent
  ],
  imports: [
    CommonModule,
    articlesDetailRoutingModule,
    HttpClientModule,
    TitleModule,
    PaginatorModule,
    ScrollTopModule,
    TooltipModule,
    FormsModule
  ],
  providers: [
    RouterModule,
    DetailArticleService
  ]
})
export class articlesDetailStatusModule { }
