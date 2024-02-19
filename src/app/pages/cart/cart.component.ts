import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { CommonModule, Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ICart } from './model/cart.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  providers: [ProductService],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  lengthNotif!:number;

  constructor(
    private _location: Location,
    private service: ProductService
  ){}

  ngOnInit(): void {
    this.getLengthNotif();
    this.getCart();
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

  listCart!: ICart[];
  getCart(){
    this.service.getListCart().subscribe(
      (data:ICart[])=>{
        this.listCart = data;
        console.log(this.listCart)
        
        this.sumTotal();
      }
    )
  }

  minusOrder(indexParent:number){
    this.listCart[indexParent].productList.forEach((res2:any) => { 
      res2.order = res2.order - 1; 
    })
    this.sumTotal();
  }

  plusOrder(indexParent:number){
    this.listCart[indexParent].productList.forEach((res2:any) => { 
      res2.order = res2.order + 1; 
    })
    this.sumTotal();
  }

  total:number = 0;
  sumTotal(){
    this.total = 0;
    let subtotal = 0
    this.listCart.forEach((res:any)=>{
      res.productList.forEach((res2:any) => {
        subtotal += res2.disconPrice * res2.order;
      })
      this.total += subtotal 
    })
  }





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
}
