import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule} from '@angular/material/input'
import { MatNativeDateModule } from "@angular/material/core";
import { MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule

  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule ,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
