import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Product} from '../product.model';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'nx-cloud-app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {

  pageTitle = 'Product Edit';
  errorMessage = '';
  productForm!: FormGroup;
  product: Product | null = null;
  sub!: Subscription;

  constructor (private fb: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    // Define the form group
    this.productForm = this.fb.group({
      productName: [''],
      productCode: [''],
      starRating: [''],
      description: ''
    });

    // Watch for changes to the currently selected product
    this.sub = this.productService.selectedProductChanges$.subscribe(
      currentProduct => this.displayProduct(currentProduct)
    );

  }

  saveProduct(originalProduct: Product | null): void {
    if (this.productForm.valid) {
      if (this.productForm.dirty) {
        // Copy over all of the original product properties
        // Then copy over the values from the form
        // This ensures values not on the form, such as the Id, are retained
        const product = {...originalProduct, ...this.productForm.value};

        if (product.id === 0) {
          this.productService.createProduct(product).subscribe({
            next: p => this.productService.changeSelectedProduct(p),
            error: err => this.errorMessage = err
          });
        } else {
          this.productService.updateProduct(product).subscribe({
            next: p => this.productService.changeSelectedProduct(p),
            error: err => this.errorMessage = err
          });
        }
      }
    }
  }

  cancelEdit(product: Product | null): void {
    // Redisplay the currently selected product
    // replacing any edits made
    this.displayProduct(product);
  }


  displayProduct(product: Product | null): void {
    // Set the local product property
    this.product = product;

    if (product) {
      // Reset the form back to pristine
      this.productForm?.reset();

      // Display the appropriate page title
      if (product.id === 0) {
        this.pageTitle = 'Add Product';
      } else {
        this.pageTitle = `Edit Product: ${ product.productName }`;
      }

      // Update the data on the form
      this.productForm.patchValue({
        productName: product.productName,
        productCode: product.productCode,
        starRating: product.starRating,
        description: product.description
      });
    }
  }
}
