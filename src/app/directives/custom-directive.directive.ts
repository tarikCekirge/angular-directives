import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private element: ElementRef) {
  }
  @Input() set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;

  }

}
