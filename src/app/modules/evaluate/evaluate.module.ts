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
import { AvatarModule } from 'primeng/avatar';
import { ToastModule } from 'primeng/toast';
import { EvaluateFormModule } from 'app/components/evaluate-form/evaluate-form.module';
import { MessageService } from 'primeng/api';
import { EvaluateService } from './services/evaluate.service';
import { SafePipe } from './safepipe';
// Import FusionCharts library and chart modules
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { AuthService } from 'app/shared/services/auth.service';
import { DialogModule } from 'primeng/dialog';
import { fireStoreService } from 'app/shared/services/fireStore.service';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme);
@NgModule({
  declarations: [
    EvaluateComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AvatarModule,
    ToastModule,
    FusionChartsModule,
    RouterModule,
    RadioButtonModule,
    TooltipModule,
    evaluateRoutingModule,
    FormsModule,
    UbayButtonModule,
    DialogModule,
    EvaluateFormModule,
    evaluateRoutingModule
  ],
  providers: [
    MessageService,
    AuthService,
    EvaluateService,
  fireStoreService  ]
})
export class evaluateStatusModule { }
