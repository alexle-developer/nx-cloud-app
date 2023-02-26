import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {ProductsNgrxViewComponent} from './products-ngrx-view/products-ngrx-view.component';

const productsNgrxRoutes: Route[] = [{path: '', component: ProductsNgrxViewComponent}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(productsNgrxRoutes)
  ],
  declarations: [
    ProductsNgrxViewComponent
  ],
  exports: [
    ProductsNgrxViewComponent
  ],
})
export class ProductsNgrxModule { }
