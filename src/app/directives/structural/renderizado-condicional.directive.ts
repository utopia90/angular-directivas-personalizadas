import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRenderizadoCondicional]'
})
export class RenderizadoCondicionalDirective {

  // Para conocer si se muestra o no elemento
  private mostrado: boolean = false;

  // Definimos un @Input que servirá para setear el valor de mostrado a true/false
  // y también para mostrar el contenido que disponga de esta directiva
  // Se le va a pasar por parámetro un true o un false
  @Input() set appRenderizadoCondicional(condicion: boolean) {

    if (!condicion && !this.mostrado) {
      // Crear un espacio (vista) con el contenido del TemplateRef
      // Que básicamente, es el elemento (div, por ejemplo) al que se le aplica
      // la directiva
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.mostrado = true;
    } else if (condicion && this.mostrado){
      // Eliminar el elemento de la vista, haremos un clear()
      this.viewContainer.clear();
      this.mostrado = false;
    }

  }


  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }


}
