import { CommonModule, Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { IProduct } from './model/product.interface';
import { FormsModule } from '@angular/forms';
import { ICart } from '../cart/model/cart.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterLink],
  providers: [ProductService],
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit{
  
  @Input() url!:string;
  lengthNotif!:number;
  isTruncate:boolean = true;
  deskripsiProd:string = "Baca Selengkapnya";
  isFollow:boolean = false;
  deskripsiFollow:string = "Follow";
  priceAfterDiscon!: number;
  product!: IProduct;

  constructor(
    private service: ProductService,
    private _location: Location
  ){}

  openNav(): void {
    const myNav = document.getElementById("myNav") as HTMLElement | null;
    if (myNav) {
      myNav.classList.remove("w-0");
      myNav.classList.add("w-full");
    }
  }

  closeNav(): void {
    const myNav = document.getElementById("myNav") as HTMLElement | null;
    if (myNav) {
      myNav.classList.remove("w-full");
      myNav.classList.add("w-0");
    }
  }

  goBackPage(): void{
    this._location.back();
  }

  ngOnInit(): void {
    this.getLengthNotif();
    this.getProduct();
  }

  getLengthNotif(){
    this.lengthNotif = 0;
    this.service.getListCart().subscribe(
      (data)=>{
        data.forEach((res:any) => {
          res.productList.forEach((res2:any) => {
            this.lengthNotif += res2.order 
          })
        });
      }
    )
  }

  getProduct(){
    const prodId = "3";
    this.service.getCartbyProductID(prodId).subscribe(
      (data:ICart)=>{
        this.cart = data;
        this.product = this.cart.productList[0];
        this.discontPrice();
      }
    )
  }

  updateProduct(){
    this.service.updateProductAPI(this.product).subscribe(
      (data:IProduct)=>{}
    )
  }

  cart!: ICart;
  order: number = 1 ; 
  postToCart(){
    this.order += 1
    this.product.order = this.order;
    this.service.saveProductToCartAPI(this.cart).subscribe(
      (data:IProduct)=>{
        this.getLengthNotif();
      }
    )
  }

  discontPrice(){
    const diskon = Math.round(this.product.price * this.product.discon / 100);
    return this.priceAfterDiscon = this.product.price - diskon;
  }

  loveWishlist(){
    if(!this.product.wishlist){
      this.product.wishlist = true
    }else {this.product.wishlist = false};
    this.updateProduct();
  }

  truncate(){
    if(!this.isTruncate) {
      this.isTruncate = true;
      this.deskripsiProd = "Baca Selengkapnya ...";
    }else{
      this.isTruncate = false;
      this.deskripsiProd = "Perkecil ...";
    } 
  }

  followingToko(){
    if(!this.isFollow) {
      this.isFollow = true;
      this.deskripsiFollow = "Unfollow";
    }else{
      this.isFollow = false;
      this.deskripsiFollow = "Follow";
    } 
  }

}
