import {Injectable} from '@angular/core';
import {AsyncLocalStorage} from 'angular-async-local-storage';

@Injectable()
export class ApiKeyService {

  private apiKey: String = '';

  constructor(protected localStorage: AsyncLocalStorage) {
  }

  setApiKey(apiKey: String) {
    this.localStorage.setItem('api_key', apiKey).subscribe(() => {
    });
  }

  getApiKey(): String {
    this.localStorage.getItem<String>('api_key').subscribe((data) => {
        this.apiKey = data;
        return this.apiKey;
      },
      () => {
      });

    return '';
  }

}
