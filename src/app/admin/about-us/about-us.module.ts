import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUSRoutingModule } from './about-us-routing.module';
import { AboutUSComponent } from './about-us/about-us.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AboutUSComponent
  ],
  imports: [
    CommonModule,
    AboutUSRoutingModule,
    FontAwesomeModule
  ]
})
export class AboutUSModule { }
