import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpResponseErrorHandlerComponent } from './http-response-error-handler.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MaterialModule} from '../material.module';

describe('HttpResponseErrorHandlerComponentTest', () => {
  let component: HttpResponseErrorHandlerComponent;
  let fixture: ComponentFixture<HttpResponseErrorHandlerComponent>;

  beforeEach(async(() => {
    const matDialogRefStub = {};

    TestBed.configureTestingModule({
      declarations: [ HttpResponseErrorHandlerComponent ],
      imports: [ MaterialModule ],
      providers: [ { provide: MatDialogRef, useValue: {} } ],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpResponseErrorHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('It should create HttpResponseErrorHandlerComponent', () => {
    expect(component).toBeTruthy();
  });
});
