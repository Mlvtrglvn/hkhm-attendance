import {AuthConfig} from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Login-Url
  loginUrl: 'https://secure.meetup.com/oauth2/authorize',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/events',

  // The SPA's id. Register SPA with this id at the auth-server
  clientId: 'valk0nja78180ri869u18lrhh3',

  // set the scope for the permissions the client should request
  // scope: 'openid profile email voucher',

  responseType: 'token',
  scope: '',
  oidc: false,
  requireHttps: true

  // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
  // instead of localStorage
  // this.oauthService.setStorage(sessionStorage);

  // // To also enable single-sign-out set the url for your auth-server's logout-endpoint here
  // this.oauthService.logoutUrl = "https://steyer-identity-server.azurewebsites.net/identity/connect/endsession";

  // This method just tries to parse the token(s) within the url when
  // the auth-server redirects the user back to the web-app
  // It doesn't send the user the the login page
  // this.oauthService.tryLogin();
};
