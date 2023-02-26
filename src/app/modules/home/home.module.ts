import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { UbayButtonModule } from 'app/components/ubay-button/ubay-button.module';
import { homeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    UbayButtonModule,
    homeRoutingModule
  ],
  providers: [
    RouterModule
  ]
})
export class homeStatusModule { }
