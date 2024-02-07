import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dummy-tokped';

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
}
