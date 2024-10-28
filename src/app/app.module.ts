import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FluxoComponent } from './componets/fluxo/fluxo.component';
import { CdsDespesasComponent } from './components/cds-despesas/cds-despesas.component';
import { CdsReceitasComponent } from './components/cds-receitas/cds-receitas.component';
import { NameDComponent } from './components/name-d/name-d.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    InicioComponent,
    FluxoComponent,
    CdsDespesasComponent,
    CdsReceitasComponent,
    NameDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
