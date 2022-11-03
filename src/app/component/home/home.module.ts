import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { ContatosComponent } from './contatos/contatos.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CarroselComponent } from '../carrosel/carrosel.component';



@NgModule({
  declarations: [
    HomeComponent,
    PrincipalComponent,
    ContatosComponent,
    NavbarComponent,
    FooterComponent,
    CarroselComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
