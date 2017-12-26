import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MeetupApiService} from '../meetup-api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  private apiKey: String = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private eventsService: MeetupApiService) {
  }

  ngOnInit() {
    this.eventsService.refreshEventsList();

  }

}
