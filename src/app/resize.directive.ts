import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[resizer]'
})
export class ResizeDirective {
  oldX = 0;
  isGrabbing = false;

  @Input()
  width: number = 0;
  @Output()
  widthChange = new EventEmitter<number>();

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isGrabbing) {
      return;
    }
    this.width += (event.clientX - this.oldX);
    this.widthChange.emit(this.width);
    this.oldX = event.clientX;
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.isGrabbing = false;
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isGrabbing = true;
    this.oldX = event.clientX;
    event.preventDefault();
  }
}
