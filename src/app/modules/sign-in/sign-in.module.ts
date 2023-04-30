import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthService } from 'app/shared/services/auth.service';
import { signInRoutingModule } from './sign-in-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    signInRoutingModule,
    RouterModule
  ],
  providers: [AuthService]
})
export class signInStatusModule { }
