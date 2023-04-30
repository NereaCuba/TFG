import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluateFormComponent } from './evaluate-form/evaluate-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { DetailHeuristicsService } from './../../modules/heuristic-detail/services/heuristic-detail.service';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { SafePipeDetail } from './safepipe';
@NgModule({
  declarations: [
    EvaluateFormComponent,
    SafePipeDetail
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AvatarModule,
    FormsModule,
    RadioButtonModule,
    ButtonModule,
    DialogModule,
    ProgressBarModule,
    ToastModule
  ],
  exports: [
    EvaluateFormComponent
    ],
  providers: [
    DetailHeuristicsService,
    MdbModalService
  ],
})
export class EvaluateFormModule { }
