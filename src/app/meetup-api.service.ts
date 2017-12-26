import {Injectable} from '@angular/core';
import {Event} from './event';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {OAuthService} from 'angular-oauth2-oidc';
import {Router} from '@angular/router';

@Injectable()
export class MeetupApiService {

  events: Event[];

  constructor(private http: HttpClient, private oauthService: OAuthService, private router: Router) {
  }

  refreshEventsList() {
    const params = {
      'desc': 'true',
      'scroll': 'recent_past',
      'status': 'past'
    };

    this.http.get('https://api.meetup.com/hongkonghikingmeetup/events',
      {
        params: params,
        responseType: 'text'
      }).subscribe(data => {
        // Read the result field from the JSON response.
        console.log(data);
        this.events = [];
        data['results'].forEach((item) => {
          const currentEvent = new Event(item['id'], item['name'], item['local_date']);
          this.events.push(currentEvent);
        });
        // this.results = data['results'];
      },
      (data) => {
        console.log(data);
      });
  }

}
