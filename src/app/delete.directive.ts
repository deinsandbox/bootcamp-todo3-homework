import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDelete]',
})
export class DeleteDirective {
  @HostListener('mouseenter')
  onmouseenter() {
    const element = this.elementRef.nativeElement;
    element.lastElementChild.style.display = null;
  }
  @HostListener('mouseleave')
  onmouseleave() {
    const element = this.elementRef.nativeElement;
    element.lastElementChild.style.display = 'none';
  }

  constructor(private elementRef: ElementRef) {}
}
