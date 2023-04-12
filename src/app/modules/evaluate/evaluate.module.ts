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
    MessageService,
    EvaluateService
  ]
})
export class evaluateStatusModule { }
