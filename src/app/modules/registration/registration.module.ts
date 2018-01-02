import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutes } from './registration.routing';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { RegistrationService } from './services/registration.service';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutes
  ],
  providers: [ RegistrationService ],
  declarations: [SigninComponent, SignupComponent]
})
export class RegistrationModule { }
