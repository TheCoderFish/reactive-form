import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorMe]'
})
export class ColorMeDirective implements OnInit {

  @Input()
  color: string;

  constructor(private el: ElementRef, private r2: Renderer2) { }

  ngOnInit() {
    this.r2.setStyle(this.el.nativeElement, 'color', this.color);
  }

}
