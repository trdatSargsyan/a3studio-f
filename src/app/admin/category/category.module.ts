import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category/category.component';
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { CreateCategoryComponent } from './create-category/create-category.component';

@NgModule({
  declarations: [
    CategoryComponent,
    CreateCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    TableModule,
    ButtonModule
  ]
})
export class CategoryModule { }
