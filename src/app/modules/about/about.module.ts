import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { aboutRoutingModule } from './about-routing.module';
import { AboutService } from './services/about.service';
import { HttpClientModule } from '@angular/common/http';
import { ScrollTopModule } from 'primeng/scrolltop';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    aboutRoutingModule,
    HttpClientModule,
    ScrollTopModule
  ],
  providers: [
    AboutService
  ]
})
export class aboutStatusModule { }
