import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { UbayButtonModule } from 'app/components/ubay-button/ubay-button.module';
import { TitleModule } from 'app/components/titles/titles.module';
import { homeRoutingModule } from './home-routing.module';
import { HomeService } from './services/home.service';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    UbayButtonModule,
    HttpClientModule,
    homeRoutingModule,
    TitleModule,
    CarouselModule
  ],
  providers: [
    RouterModule,
    HomeService
  ]
})
export class homeStatusModule { }
