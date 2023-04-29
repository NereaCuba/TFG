import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { DropdownModule } from 'primeng/dropdown';
import { RouterModule } from '@angular/router';
import { StepsModule } from 'primeng/steps';


@NgModule({
  declarations: [
    SettingsComponent,
  ],
  imports: [
    DialogModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    AvatarModule,
    StepsModule,
    RouterModule,
    ButtonModule
  ],
  exports: [SettingsComponent],
  providers: [RouterModule]
})
export class SettingsModule { }
