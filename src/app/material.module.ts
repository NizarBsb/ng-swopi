import { NgModule } from '@angular/core';
import { MatTabsModule, MatTableModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [ MatTabsModule, MatTableModule, MatFormFieldModule ],
  exports: [ MatTabsModule, MatTableModule, MatFormFieldModule],
})
export class MaterialModule { }
