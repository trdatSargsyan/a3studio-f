import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';

const routes: Routes = [
  {path:'', component: CategoryComponent},
  {path:'create', component: CreateCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
