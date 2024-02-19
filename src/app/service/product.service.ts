import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IProduct } from '../pages/product/model/product.interface';
import { ICart } from '../pages/cart/model/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public http: HttpClient;

  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
  }
  
  getProductAPI(prodid:string): Observable<any> {
    return this.http
      .get<any>(`http://localhost:3000/product/${prodid}`)
      .pipe(tap((res: Response) => res));
  }

  updateProductAPI(IProduct:IProduct): Observable<any> {
    return this.http
      .put<any>(`http://localhost:3000/product/${IProduct.id}`, IProduct)
      .pipe(tap((res: Response) => res));
  }

  saveProductToCartAPI(ICart:ICart): Observable<any> {
    return this.http
      .put<any>(`http://localhost:3000/cart/${ICart.id}`, ICart)
      .pipe(tap((res: Response) => res));
  }

  getListCart(): Observable<any> {
    return this.http
      .get<any>(`http://localhost:3000/cart`)
      .pipe(tap((res: Response) => res));
  }

  getCartbyProductID(prodid:string): Observable<any> {
    return this.http
      .get<any>(`http://localhost:3000/cart/${prodid}`)
      .pipe(tap((res: Response) => res));
  }



}
