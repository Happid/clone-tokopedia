import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pembayaran',
  standalone: true,
  imports: [],
  templateUrl: './pembayaran.component.html',
  styleUrl: './pembayaran.component.css'
})
export class PembayaranComponent {

  @Input() lengthNotif!:number;
}
