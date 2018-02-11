import { Injectable } from '@angular/core';

import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpResponseErrorHandlerComponent} from './http-response-error-handler/http-response-error-handler.component';
import {MatDialog} from '@angular/material';

@Injectable()
export class HttpResponseInterceptorService implements HttpInterceptor {

  constructor(private dialog: MatDialog) {}

  /**
   * Interceptor.
   * @param {HttpRequest<any>} req
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && ~(event.status / 100) > 3) {
        }
        return event;
      })
      .catch((err: any, caught) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 200) {
            let dialogRef = this.dialog.open(HttpResponseErrorHandlerComponent, {
              width: '600px',
              data: 'This text is passed into the dialog!'
            });
            dialogRef.afterClosed();
          }
          return Observable.throw(err);
        }
      });
  }

}
