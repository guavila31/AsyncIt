import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:  Router) { }

  ngOnInit(): void {
  }
  scroll(id: any) {
    let el: any
    console.log(`scrolling to ${id}`);
    el = document.getElementById(id);

    if (el != undefined || el != null) {
      el.scrollIntoView();
    } else {
      this.router.navigate(['home'])
    }

  }

}
