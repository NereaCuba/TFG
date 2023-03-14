import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {PaginatorModule} from 'primeng/paginator';
import { DetailHeuristicsComponent } from './heuristic-detail/heuristic-detail.component';
import { DetailHeuristicsService } from './services/heuristic-detail.service';
import { heuristicsDetailRoutingModule } from './heuristic-detail-routing.module';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [
    DetailHeuristicsComponent
  ],
  imports: [
    CommonModule,
    heuristicsDetailRoutingModule,
    HttpClientModule,
    PaginatorModule,
    TooltipModule,
    FormsModule
  ],
  providers: [
    RouterModule,
    DetailHeuristicsService
  ]
})
export class heuristicsDetailStatusModule { }
