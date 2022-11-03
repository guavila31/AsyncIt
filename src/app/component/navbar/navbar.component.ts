import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(id: any) {
    let el: any
    console.log(`scrolling to ${id}`);
    el = document.getElementById(id);
    el.scrollIntoView();
  }

}
