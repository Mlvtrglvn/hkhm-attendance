import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {EventsComponent} from './events/events.component';
import {EventDetailComponent} from './event-detail/event-detail.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'events/:id', component: EventDetailComponent},
  {path: 'events', component: EventsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
