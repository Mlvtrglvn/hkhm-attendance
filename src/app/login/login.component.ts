import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiKeyService} from '../api-key.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private apiKey: String = '';

  constructor(private router: Router, private apiKeyService: ApiKeyService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.apiKeyService.setApiKey(this.apiKey.trim());
    this.router.navigate(['events']);
  }

}
