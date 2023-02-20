import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, tap} from 'rxjs';
import {Product} from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // api is from the angular-in-memory-web-api
  private productsUrl = 'api/products';
  private products: Product[] = [];


  private selectedProductSource = new BehaviorSubject<Product | null>(null);
  selectedProductChanges$ = this.selectedProductSource.asObservable();

  constructor (private http: HttpClient) { }

  // Return an initialized product
  newProduct(): Product {
    return {
      id: 0,
      productName: '',
      productCode: 'New',
      description: '',
      starRating: 0
    };
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  changeSelectedProduct(selectedProduct: Product | null): void {
    this.selectedProductSource.next(selectedProduct);
  }

  createProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    // Product Id must be null for the Web API to assign an Id
    const newProduct = {...product, id: null};
    return this.http.post<Product>(this.productsUrl, newProduct, {headers})
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        tap(data => {
          this.products.push(data);
        })
      );
  }

  updateProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `${ this.productsUrl }/${ product.id }`;
    return this.http.put<Product>(url, product, {headers})
      .pipe(
        tap(() => console.log('updateProduct: ' + product.id)),
        // Update the item in the list
        // This is required because the selected product that was edited
        // was a copy of the item from the array.
        tap(() => {
          const foundIndex = this.products.findIndex(item => item.id === product.id);
          if (foundIndex > -1) {
            this.products[foundIndex] = product;
          }
        }),
        // Return the product on an update
        map(() => product)
      );

  }
}
