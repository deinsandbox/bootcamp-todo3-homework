import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDelete]',
})
export class DeleteDirective {
  @HostListener('mouseenter')
  onmouseenter() {
    const element = this.elementRef.nativeElement;
    element.lastElementChild.classList.remove('d-none');
  }
  @HostListener('mouseleave')
  onmouseleave() {
    const element = this.elementRef.nativeElement;
    element.lastElementChild.classList.add('d-none');
  }

  constructor(private elementRef: ElementRef) {}
}
