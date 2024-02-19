import { CommonModule, Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent{

  constructor(
    private _location: Location
  ){}



  @Input() url!:string;
  @Input() lengthNotif!:number;

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
