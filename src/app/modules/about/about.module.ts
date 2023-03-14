import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { aboutRoutingModule } from './about-routing.module';
import { AboutService } from './services/about.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    aboutRoutingModule,
    HttpClientModule
  ],
  providers: [
    AboutService
  ]
})
export class aboutStatusModule { }
