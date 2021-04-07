import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSubrayado]'
})
export class SubrayadoDirective {

  @Input () colorPorDefecto: string = '';

  @Input('appSubrayado') colorSubrayado: string = '';

  // Constructor con inyección de ElenetrRef que servirá para referenciar
  // al elemento en el que aplica el subrayado
  constructor(private el: ElementRef) {

  }


  // Esta directiva se va a encargar de SUBRAYAR un texto de un color
  // cuando el ratón pase por encima de este texto (mouseenter) y cuando
  // el cursos salga del elementom volverá a no tener un color subrayado

  /**
   * Useramos un HOSTLISTENER para escuchar EVENTOS de tipo
   * * mouseenter y mouseleave
   * en el elemento que tenga esta directiva
   */
  @HostListener('mouseenter') onMouseEnter() {
    // Subrayamos el elemento con el color que se ha pasado por INPUT
    // Si no está definido, le damos el color por defecto que se ha pasado por INPUT
    // Si no está definido, le damos un color 'tomato'.
    this.subrayar(this.colorSubrayado || this.colorPorDefecto || 'tomato');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Cuando el usuario saque el cursor de encima del elemento
    // quitamos el color de fondo (backgroundColor)
    this.subrayar('');
    this.el.nativeElement.style.fontWeight = '';
  }

  private subrayar(color: string) {
    // Para subrayar el elemento con un color, vamos a acceder
    // al elemento donde se aplica la directiva a través de ElementRef
    // Accedemos al estilo del elemento del DOM y concretamente al backgroundColor
    // para darle el color que venga por parámetro.
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.fontWeight = 'bolder';
  }

}
