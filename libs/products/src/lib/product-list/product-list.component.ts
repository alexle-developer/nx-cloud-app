import {Component} from '@angular/core';

@Component({
  selector: 'nx-cloud-app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  pageTitle = 'Products';
  displayCode: boolean;

  constructor () {
    this.displayCode = false;
  }

  checkChanged(): void {
    this.displayCode = !this.displayCode;
  }

  newProduct(): void {
    //TODO
  }

}
