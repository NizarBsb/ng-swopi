import {inject, TestBed} from '@angular/core/testing';

import { HttpResponseInterceptorService } from './http-response-interceptor.service';
import { MatDialogRef } from '@angular/material';
import { MaterialModule } from './material.module';

describe('HttpResponseInterceptorServiceTest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      providers: [
        HttpResponseInterceptorService,
        { provide: MatDialogRef, useValue: {} } ]
    });
  });

  it('It should create HttpResponseInterceptorService', inject([ HttpResponseInterceptorService ], (service: HttpResponseInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
