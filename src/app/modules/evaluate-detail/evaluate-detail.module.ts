import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'app/shared/services/auth.service';
import { EvaluateDetailComponent } from './evaluate-detail/evaluate-detail.component';
import { evaluateDetailRoutingModule } from './evaluate-detail-routing.module';
// Import FusionCharts library and chart modules
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { DialogModule } from 'primeng/dialog';
import { fireStoreService } from 'app/shared/services/fireStore.service';
import { EvaluateService } from '../evaluate/services/evaluate.service';
import { SafePipeDetail } from './safepipe';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme);
@NgModule({
  declarations: [
    EvaluateDetailComponent,
    SafePipeDetail
  ],
  imports: [
    CommonModule,
    DialogModule,
    FusionChartsModule,
    evaluateDetailRoutingModule
  ],
  providers: [
    AuthService,
    fireStoreService,
    EvaluateService ]
})
export class evaluateDetailStatusModule { }
