import {Injectable} from '@angular/core';
import {AsyncLocalStorage} from 'angular-async-local-storage';

@Injectable()
export class ApiKeyService {

  private apiKey: String = '';

  constructor(protected localStorage: AsyncLocalStorage) {
    this.localStorage.getItem<String>('api_key').subscribe((data) => {
        this.apiKey = data;
      },
      () => {
      });
  }

  setApiKey(apiKey: String) {
    this.localStorage.setItem('api_key', apiKey).subscribe(() => {
    });
    this.apiKey = apiKey;
  }

  getApiKey(): String {
    return this.apiKey;
  }

}
