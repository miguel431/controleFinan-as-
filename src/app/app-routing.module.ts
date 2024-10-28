import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FluxoComponent } from './componets/fluxo/fluxo.component';
import { CdsDespesasComponent } from './components/cdsDespesas/cdsDespesas.component';
import { CdsReceitasComponent } from './components/cds-receitas/cds-receitas.component';
import { NameDComponent } from './components/name-d/name-d.component';
const routes: Routes = [
  {
    path:'', component:LoginComponent
  },

  {
    path:'login', component:LoginComponent
  },

  {
    path:'cadastro', component:CadastroComponent
  },

  {
    path:'inc',component:InicioComponent
  },

  {
    path:'fluxo',component:FluxoComponent
  },

  {
    path:'cdespesas',component:CdsDespesasComponent
  },

  {
    path:'receitas',component:CdsReceitasComponent
  },

  {
    path:'nome',component:NameDComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
