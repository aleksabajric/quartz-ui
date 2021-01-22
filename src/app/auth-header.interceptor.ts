import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppComponent} from "./app.component";

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

  constructor(private appComponent: AppComponent) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + this.appComponent.getToken()
      }
    });
    return next.handle(req);
  }
}