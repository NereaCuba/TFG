import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeuristicsComponent } from './heuristics/heuristics.component';
import { RouterModule } from '@angular/router';
import { heuristicsRoutingModule } from './heuristics-routing.module';
import { HeuristicsService } from './services/heuristics.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [
    HeuristicsComponent
  ],
  imports: [
    CommonModule,
    heuristicsRoutingModule,
    HttpClientModule,
    PaginatorModule,
    FormsModule
  ],
  providers: [
    RouterModule,
    HeuristicsService
  ]
})
export class heuristicsStatusModule { }
