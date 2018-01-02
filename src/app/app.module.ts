import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RegistrationModule } from './modules/registration';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { InterceptorService, HttpService } from './shard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RegistrationModule,
    AppRoutes,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
