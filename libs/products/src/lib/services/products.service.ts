import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, tap} from 'rxjs';
import {Product} from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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

}
