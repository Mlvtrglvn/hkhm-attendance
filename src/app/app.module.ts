import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AsyncLocalStorageModule} from 'angular-async-local-storage';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {EventsComponent} from './events/events.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import {FormsModule} from '@angular/forms';
import {ApiKeyService} from './api-key.service';
import {MeetupApiService} from './meetup-api.service';
import {OAuthModule} from 'angular-oauth2-oidc';
import {HttpClientModule} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './interceptors/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EventsComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    AsyncLocalStorageModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    MeetupApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
