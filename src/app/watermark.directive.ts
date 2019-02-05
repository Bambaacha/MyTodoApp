import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'input [appWatermark]'
})
export class WatermarkDirective {
  text = 'Deine Todo...';
  textBox: HTMLInputElement;

  constructor(elementRef: ElementRef<HTMLInputElement>) {
    this.textBox = elementRef.nativeElement;
  }

}
