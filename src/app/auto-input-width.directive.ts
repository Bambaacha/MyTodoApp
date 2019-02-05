import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'input [appAutoInputWidth]'
})
export class AutoInputWidthDirective {
  inputBox: HTMLInputElement;

  @Input()
  appAutoInputWidth;

  constructor(elementRef: ElementRef) {
    this.inputBox = elementRef.nativeElement;
  }

  @HostListener('focus')
  onfocus() {
    const width = this.inputBox.offsetWidth + Number(this.appAutoInputWidth);
    this.inputBox.style.width = width + 'px';
  }

  @HostListener('blur')
  lostFocus() {
    const width = this.inputBox.offsetWidth - Number(this.appAutoInputWidth);
    this.inputBox.style.width = width + 'px';
  }

}
