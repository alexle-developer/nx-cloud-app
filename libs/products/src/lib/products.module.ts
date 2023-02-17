import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {ProductViewComponent} from './product-view/product-view.component';

const productsRoutes: Route[] = [
  {path: '', component: ProductViewComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(productsRoutes)],
  declarations: [ProductViewComponent],
  exports: [ProductViewComponent],
})
export class ProductsModule { }
