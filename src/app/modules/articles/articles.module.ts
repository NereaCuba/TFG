import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { RouterModule } from '@angular/router';
import { articlesRoutingModule } from './articles-routing.module';


@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    articlesRoutingModule
  ],
  providers: [
    RouterModule
  ]
})
export class articlesStatusModule { }
