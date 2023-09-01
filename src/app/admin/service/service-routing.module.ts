import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path:'', component:ServiceComponent},
  {path: 'portofolio', loadChildren: () => import('../portofolio/portofolio.module').then(x => x.PortofolioModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
