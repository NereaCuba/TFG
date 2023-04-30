import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AuthService } from 'app/shared/services/auth.service';
import { verifyEmailRoutingModule } from './verify-email-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    VerifyEmailComponent
  ],
  imports: [
    CommonModule,
    verifyEmailRoutingModule,
    RouterModule
  ],
  providers: [AuthService]
})
export class verifyEmailStatusModule { }
