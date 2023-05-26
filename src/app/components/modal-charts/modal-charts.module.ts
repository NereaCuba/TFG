import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalChartsComponent } from './modal-charts/modal-charts.component';
import { RouterModule } from '@angular/router';
import { fireStoreService } from 'app/shared/services/fireStore.service';
import { AuthService } from 'app/shared/services/auth.service';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { EvaluateService } from 'app/modules/evaluate/services/evaluate.service';
import { SafePipeModal } from './modal-charts/safepipe';



@NgModule({
  declarations: [ModalChartsComponent, SafePipeModal],
  imports: [
    CommonModule,
    DataViewModule,
    ReactiveFormsModule,
    FormsModule,
    TagModule,
    DropdownModule,
    ButtonModule,
    PaginatorModule,
  ],
  providers: [AuthService, fireStoreService, RouterModule, EvaluateService],
  exports: [ModalChartsComponent]
})
export class ModalChartsModule { }
