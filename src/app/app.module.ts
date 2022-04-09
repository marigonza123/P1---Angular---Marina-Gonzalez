import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MarinaComponentComponent } from './marina-component/marina-component.component';
import { MarinaDetalhesComponentComponent } from './marina-detalhes-component/marina-detalhes-component.component';
import { MarinaListaComponentComponent } from './marina-lista-component/marina-lista-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path: 'MarinaComponent', component: MarinaComponentComponent},
    {path: 'MarinaDetalhesComponent', component: MarinaDetalhesComponentComponent},
    {path: 'MarinaListaComponent', component: MarinaListaComponentComponent}
  ]) ],
  declarations: [ AppComponent, HelloComponent, MarinaComponentComponent, MarinaDetalhesComponentComponent, MarinaListaComponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
