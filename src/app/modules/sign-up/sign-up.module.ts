import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthService } from 'app/shared/services/auth.service';
import { signUpRoutingModule } from './sign-up-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    signUpRoutingModule,
    RouterModule
  ],
  providers: [AuthService]
})
export class signUpStatusModule { }
