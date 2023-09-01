import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./admin/home/home.module').then(x => x.HomeModule)},
  {path: 'services', loadChildren: () => import('./admin/service/service.module').then(x => x.ServiceModule)},
  {path: 'about-us', loadChildren: () => import('./admin/about-us/about-us.module').then(x => x.AboutUSModule)},
  {path: 'portofolio', loadChildren: () => import('./admin/portofolio/portofolio.module').then(x => x.PortofolioModule)},
  {path: 'categories', loadChildren: () => import('./admin/category/category.module').then(x => x.CategoryModule)},
  {path: 'prices', loadChildren: () => import('./admin/price/price.module').then(x => x.PriceModule)},
  {path: 'contact', loadChildren: () => import('./admin/contact/contact.module').then(x => x.ContactModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
