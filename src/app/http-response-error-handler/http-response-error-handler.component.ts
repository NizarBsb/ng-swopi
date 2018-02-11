import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-http-response-error-handler',
  templateUrl: './http-response-error-handler.component.html',
  styleUrls: ['./http-response-error-handler.component.css']
})
export class HttpResponseErrorHandlerComponent {

  /**
   * Constructor.
   */
  constructor(public dialogRef: MatDialogRef<HttpResponseErrorHandlerComponent>) {}

  onCloseConfirm() {
    this.dialogRef.close('Cancel');
  }

}
