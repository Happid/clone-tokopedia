import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit{
  
  ngAfterViewInit(): void {
    this.countDown();
  }

  countDown(){
      var countDownDate = new Date("Dec 5, 2024 00:00:00").getTime();

      // Memperbarui hitungan mundur setiap 1 detik
      setInterval(() => {

        // Untuk mendapatkan tanggal dan waktu hari ini
        var now = new Date().getTime();
          
        // Temukan jarak antara sekarang dan tanggal hitung mundur
        var distance = countDownDate - now;
          
        // Perhitungan waktu untuk hari, jam, menit dan detik
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
        // Keluarkan hasil dalam elemen dengan id = "demo"
        const idContDown = document.getElementById("demo") as HTMLElement | null;
        if(idContDown){
          idContDown.innerHTML =  hours + "h : " + minutes + "m : " + seconds + "s ";
        }
        
      }, 1000);
  }


}
