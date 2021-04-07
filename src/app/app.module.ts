import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubrayadoDirective } from './directives/attribute/subrayado.directive';
import { RenderizadoCondicionalDirective } from './directives/structural/renderizado-condicional.directive';
import { EspiaCicloVidaDirective } from './directives/spies/espia-ciclo-vida.directive';

@NgModule({
  declarations: [
    AppComponent,
    SubrayadoDirective,
    RenderizadoCondicionalDirective,
    EspiaCicloVidaDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
