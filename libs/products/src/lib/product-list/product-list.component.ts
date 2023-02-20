import {ProductService} from '../services/product.service';
import {Product} from '../product.model';
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'nx-cloud-app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})

export class ProductListComponent implements OnInit {
  pageTitle = 'Products';
  products: Product[] = [];

  // show or hide productCode
  displayCode: boolean;

  // Used to highlight the selected product in the list
  selectedProduct: Product | null = null;

  constructor (private productService: ProductService) {
    this.displayCode = false;

  }
  ngOnInit(): void {
    this.productService.selectedProductChanges$.subscribe(
      currentProduct => this.selectedProduct = currentProduct
    );

    this.productService.getProducts().subscribe(products => this.products = products);
  }


  productSelected(product: Product): void {
    this.productService.changeSelectedProduct(product);
  }

  checkChanged(): void {
    this.displayCode = !this.displayCode;
  }


}
