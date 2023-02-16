import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';


const productsRoutes: Route[] = [
  /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(productsRoutes)],
})


export class ProductsModule { }
