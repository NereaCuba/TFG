import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from 'app/shared/services/auth.service';
import { dashboardRoutingModule } from './dashboard-routing.module';
import { fireStoreService } from 'app/shared/services/fireStore.service';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { EvaluateService } from '../evaluate/services/evaluate.service';
import { RouterModule } from '@angular/router';
import { SafePipeDash } from './safepipe';
@NgModule({
  declarations: [
    DashboardComponent,
    SafePipeDash
  ],
  imports: [
    CommonModule,
    DataViewModule,
    ReactiveFormsModule,
    FormsModule,
    TagModule,
    DropdownModule,
    ButtonModule,
    PaginatorModule,
    dashboardRoutingModule
  ],
  providers: [AuthService, fireStoreService, EvaluateService, RouterModule  ]
})
export class dashboardStatusModule { }
