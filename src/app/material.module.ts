import { NgModule } from '@angular/core';

import {
  MatTabsModule,
  MatTableModule,
  MatDialogModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
