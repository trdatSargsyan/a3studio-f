import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { PortofolioDetailComponent } from './portofolio-detail/portofolio-detail.component';
import { AddProjectComponent } from './add-project/add-project.component';

const routes: Routes = [
  {path:'', component:PortofolioComponent},
  {path:'add-project', component:AddProjectComponent},
  {path:'details/:id', component: PortofolioDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortofolioRoutingModule { }
