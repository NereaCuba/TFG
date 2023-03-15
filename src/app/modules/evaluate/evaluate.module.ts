import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluateComponent } from './evaluate/evaluate.component';
import { RouterModule } from '@angular/router';
import { evaluateRoutingModule } from './evaluate-routing.module';

import {TooltipModule} from 'primeng/tooltip';


@NgModule({
  declarations: [
    EvaluateComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
    evaluateRoutingModule
  ],
  providers: [
    RouterModule
  ]
})
export class evaluateStatusModule { }
