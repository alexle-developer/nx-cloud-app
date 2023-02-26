import {NgModule} from '@angular/core';

import {HomeComponent, PagenotfoundComponent} from '@nx-cloud-app/pages';
import {Routes, RouterModule} from '@angular/router';


const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {
    path: 'products',
    loadChildren: () => import('@nx-cloud-app/products').then(m => m.ProductsModule)
  },
  {
    path: 'products-ngrx',
    loadChildren: () => import('@nx-cloud-app/products-ngrx').then(m => m.ProductsNgrxModule)
  },
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
