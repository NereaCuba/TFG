import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeuristicsComponent } from './heuristics/heuristics.component';
import { RouterModule } from '@angular/router';
import { heuristicsRoutingModule } from './heuristics-routing.module';

@NgModule({
  declarations: [
    HeuristicsComponent
  ],
  imports: [
    CommonModule,
    heuristicsRoutingModule
  ],
  providers: [
    RouterModule
  ]
})
export class heuristicsStatusModule { }
