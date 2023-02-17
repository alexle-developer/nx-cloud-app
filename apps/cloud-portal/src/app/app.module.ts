

import {LayoutModule} from '@nx-cloud-app/layout';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {HomeComponent, PagenotfoundComponent} from '@nx-cloud-app/pages';



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
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
