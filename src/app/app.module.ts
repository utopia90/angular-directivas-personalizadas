import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubrayadoDirective } from './directives/attribute/subrayado.directive';
import { RenderizadoCondicionalDirective } from './directives/structural/renderizado-condicional.directive';
import { EspiaCicloVidaDirective } from './directives/spies/espia-ciclo-vida.directive';
import { EspiadoComponent } from './components/espiado/espiado.component';

@NgModule({
  declarations: [
    AppComponent,
    SubrayadoDirective,
    RenderizadoCondicionalDirective,
    EspiaCicloVidaDirective,
    EspiadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
