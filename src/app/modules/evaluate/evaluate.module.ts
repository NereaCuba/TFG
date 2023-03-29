import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluateComponent } from './evaluate/evaluate.component';
import { RouterModule } from '@angular/router';
import { evaluateRoutingModule } from './evaluate-routing.module';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TooltipModule} from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { UbayButtonModule } from 'app/components/ubay-button/ubay-button.module';
import { HttpClientModule } from '@angular/common/http';

import { EvaluateFormModule } from 'app/components/evaluate-form/evaluate-form.module';

@NgModule({
  declarations: [
    EvaluateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    RadioButtonModule,
    TooltipModule,
    evaluateRoutingModule,
    FormsModule,
    UbayButtonModule,
    EvaluateFormModule,
    evaluateRoutingModule
  ],
  providers: [
  ]
})
export class evaluateStatusModule { }
