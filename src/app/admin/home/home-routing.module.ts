import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortofolioDetailComponent } from '../portofolio/portofolio-detail/portofolio-detail.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'details/:id', component: PortofolioDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
