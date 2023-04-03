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

@NgModule({
  declarations: [
    EvaluateFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RadioButtonModule,
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
