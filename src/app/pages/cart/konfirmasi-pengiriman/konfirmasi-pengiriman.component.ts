import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-konfirmasi-pengiriman',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './konfirmasi-pengiriman.component.html',
  styleUrl: './konfirmasi-pengiriman.component.css'
})
export class KonfirmasiPengirimanComponent {

  @Input() lengthNotif!:number;
}
