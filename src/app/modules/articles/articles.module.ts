import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { RouterModule } from '@angular/router';
import { articlesRoutingModule } from './articles-routing.module';
import { TitleModule } from 'app/components/titles/titles.module';
import { ArticleService } from './services/articles.service';
import { HttpClientModule } from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    articlesRoutingModule,
    TitleModule,
    HttpClientModule,
    InputTextModule,
    FormsModule
  ],
  providers: [
    RouterModule,
    ArticleService
  ]
})
export class articlesStatusModule { }
