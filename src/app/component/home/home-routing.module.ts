import { ContatosComponent } from './contatos/contatos.component';
import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: PrincipalComponent, },
      { path: "contato", component: ContatosComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes),
],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
