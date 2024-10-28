import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';

import { SignupComponent } from '../../components/signup/signup.component';
import { SigninComponent } from '../../components/signin/signin.component';
import { ProfileComponent } from '../../components/profile/profile.component';

@NgModule({
  declarations: [
	SignupComponent,
	SigninComponent,
	ProfileComponent
  ],
  imports: [
    CommonModule,
	 ReactiveFormsModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
