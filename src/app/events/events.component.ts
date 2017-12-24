import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiKeyService} from '../api-key.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  private apiKey: String = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private apiKeyService: ApiKeyService) {
    route.params.subscribe(val => {
      // put the code from `ngOnInit` here
    });
  }

  ngOnInit() {
    this.apiKey = this.apiKeyService.getApiKey();

    console.log('Api key: ' + this.apiKey);
    if (this.apiKey.trim() === '') {
      this.router.navigate(['/login']);
    }
  }

}
