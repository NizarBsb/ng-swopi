import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpResponseErrorHandlerComponent } from './http-response-error-handler.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('HttpResponseErrorHandlerComponentTest', () => {
  let component: HttpResponseErrorHandlerComponent;
  let fixture: ComponentFixture<HttpResponseErrorHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpResponseErrorHandlerComponent ],
      imports: [ MaterialModule, NoopAnimationsModule ],
      providers: [ { provide: MatDialogRef, useValue: {} } ],
    }).compileComponents();
  }));

  TestBed.overrideModule(BrowserDynamicTestingModule, {
    set: {
      entryComponents: [HttpResponseErrorHandlerComponent],
    },
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpResponseErrorHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('It should create HttpResponseErrorHandlerComponent', () => {
    expect(component instanceof HttpResponseErrorHandlerComponent).toBeTruthy();
  });

});
