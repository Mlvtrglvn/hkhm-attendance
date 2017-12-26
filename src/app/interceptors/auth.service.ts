import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {OAuthService} from 'angular-oauth2-oidc';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const oauthService = this.injector.get(OAuthService);
    req = req.clone({
      setHeaders: {
        'Authorization': 'Bearer ' + oauthService.getAccessToken()
      }
    });

    return next.handle(req);
  }
}
