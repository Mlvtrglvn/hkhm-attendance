import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AsyncLocalStorageModule} from 'angular-async-local-storage';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {EventsComponent} from './events/events.component';
import {EventDetailComponent} from './event-detail/event-detail.component';


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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
