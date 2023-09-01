import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortofolioRoutingModule } from './portofolio-routing.module';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortofolioDetailComponent } from './portofolio-detail/portofolio-detail.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
@NgModule({
  declarations: [
    PortofolioComponent,
    PortofolioDetailComponent,
    AddProjectComponent,

  ],
  imports: [
    CommonModule,
    PortofolioRoutingModule,
    CarouselModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    DropdownModule,
    MultiSelectModule
  ]
})
export class PortofolioModule {
}
