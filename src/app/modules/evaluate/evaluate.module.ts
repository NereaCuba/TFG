import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluateComponent } from './evaluate/evaluate.component';
import { RouterModule } from '@angular/router';
import { evaluateRoutingModule } from './evaluate-routing.module';



@NgModule({
  declarations: [
    EvaluateComponent
  ],
  imports: [
    CommonModule,
    evaluateRoutingModule
  ],
  providers: [
    RouterModule
  ]
})
export class evaluateStatusModule { }
