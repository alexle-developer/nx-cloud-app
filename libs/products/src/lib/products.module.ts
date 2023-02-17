import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {ProductViewComponent} from './product-view/product-view.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductEditComponent} from './product-edit/product-edit.component';


const productsRoutes: Route[] = [{path: '', component: ProductViewComponent}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes)
  ],
  declarations: [
    ProductViewComponent,
    ProductListComponent,
    ProductEditComponent,
  ],
  exports: [ProductViewComponent, ProductListComponent, ProductEditComponent],
})
export class ProductsModule { }
