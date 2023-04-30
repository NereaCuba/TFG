import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthService } from 'app/shared/services/auth.service';
import { forgotPasswordRoutingModule } from './forgot-password-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    forgotPasswordRoutingModule,
    RouterModule
  ],
  providers: [AuthService]
})
export class forgotPasswordStatusModule { }
