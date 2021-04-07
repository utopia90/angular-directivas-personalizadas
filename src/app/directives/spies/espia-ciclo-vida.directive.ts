import { Directive, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appEspiaCicloVida]'
})
export class EspiaCicloVidaDirective implements OnInit, OnDestroy {

  constructor() { }

  // Esto se ejecutará en todos aquellos componentes
  // que tengan esta directiva.
  // sin que tengamos que implementar el código en cada uno de ellos

  ngOnInit() {
    this.mostrarCiclo('ONINIT')
  }

  ngOnDestroy() {
    this.mostrarCiclo('ONDESTROY')
  }

  private mostrarCiclo(ciclo: string) {
    console.log(`Se ha ejecutado el: ${ciclo} en el componente`);
  }

}
