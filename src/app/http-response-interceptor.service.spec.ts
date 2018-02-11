import { inject, TestBed } from '@angular/core/testing';

import { HttpResponseInterceptorService } from './http-response-interceptor.service';
import { MatDialogRef } from '@angular/material';
import { MaterialModule } from './material.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { StarWarsService } from './star-wars.service';

describe('HttpResponseInterceptorServiceTest', () => {

  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let swService: StarWarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, HttpClientTestingModule ],
      providers: [
        HttpResponseInterceptorService,
        StarWarsService,
        { provide: MatDialogRef, useValue: {} } ]
    });

    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient);
    swService = TestBed.get(StarWarsService);
  });

  it('It should create HttpResponseInterceptorService', inject(
    [ HttpResponseInterceptorService ],
    (service: HttpResponseInterceptorService) => {
      expect(service instanceof HttpResponseInterceptorService).toBeTruthy();
    }));

  it('It should catch HTTP 404 - Not found error', function (done) {
    httpClient.get('/not-found').subscribe(() => {}, (error) => {
      expect(error.status).toEqual(404);
      done();
    });

    httpMock.expectOne('/not-found').error(new ErrorEvent('Not found'), {
      status: 404
    });

    httpMock.verify();
  });

  it('It should catch HTTP 500 - Bad Request error', function (done) {
    httpClient.get('/bad-request').subscribe(() => {}, (error) => {
      expect(error.status).toEqual(500);
      done();
    });

    httpMock.expectOne('/bad-request').error(new ErrorEvent('Not found'), {
      status: 500
    });

    httpMock.verify();
  });

});
