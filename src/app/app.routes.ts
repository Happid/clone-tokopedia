import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch: 'full' },
  { path: 'home', 
    component: LayoutComponent,
    children: [
      { path: '', loadComponent: ()=>import('./pages/home/home.component').then(c => c.HomeComponent) }
    ],
  },
  { path: 'product', 
    component: LayoutComponent,
    children: [
      { path: '', loadComponent: ()=>import('./pages/product/product.component').then(c => c.ProductComponent) }
    ],
  },
  { path: 'cart', 
    component: LayoutComponent,
    children: [
      { path: '', loadComponent: ()=>import('./pages/cart/cart.component').then(c => c.CartComponent) }
    ],
  },
  { path: 'konfirmasi-pengiriman', 
    component: LayoutComponent,
    children: [
      { path: '', loadComponent: ()=>import('./pages/cart/konfirmasi-pengiriman/konfirmasi-pengiriman.component').then(c => c.KonfirmasiPengirimanComponent) }
    ],
  },
  { path: 'pembayaran', 
    component: LayoutComponent,
    children: [
      { path: '', loadComponent: ()=>import('./pages/cart/konfirmasi-pengiriman/pembayaran/pembayaran.component').then(c => c.PembayaranComponent) }
    ],
  },
  { path:'**', loadComponent: ()=>import('./shared/component/page-not-found/page-not-found.component').then(c=> c.PageNotFoundComponent) },
];
