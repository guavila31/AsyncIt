import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  constructor( private router: Router) { }

  public mensagemEnviada: boolean = false;

  ngOnInit(): void {
  }

  scroll(id: any) {
    let el: any
    console.log(`scrolling to ${id}`);
    el = document.getElementById(id);
    el.scrollIntoView();
    console.log("Passou")
    this.mensagemEnviada = !this.mensagemEnviada;
  }
}



