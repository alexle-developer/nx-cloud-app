import {NgModule} from '@angular/core';

import {HomeComponent, PagenotfoundComponent} from '@nx-cloud-app/pages';
import {Routes, RouterModule} from '@angular/router';


const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {
    path: 'products',
    loadChildren: () => import('libs/products/src/lib/products.module').then(m => m.ProductsModule)
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
