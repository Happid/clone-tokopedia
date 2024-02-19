import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Router, RouterOutlet } from '@angular/router';
import { ProductService } from '../service/product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, HttpClientModule],
  providers: [ProductService],
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit{
  url!: string;
  lengthNotif:number = 0;

  constructor(
    private router: Router,
    private service: ProductService
  ){
    this.url = this.router.url;
  }
  ngOnInit(): void {
    this.getLengthNotif();
  }

  
  getLengthNotif(){
    this.service.getListCart().subscribe(
      (data)=>{
        this.lengthNotif = data.length;
      }
    )
  }
}
