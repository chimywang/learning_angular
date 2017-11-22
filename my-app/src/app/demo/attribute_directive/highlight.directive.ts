import {Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive({selector: '[appHighlight]'})

export class HighlightDirective {
  @Input('appHighlight') hightlightColor: string;
  @Input() defaultColor: string;
  constructor(private el: ElementRef) {
  }

  /**
   * 鼠标光标移入
   */
  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.hightlightColor || this.defaultColor || 'red');
  }

  /**
   * 鼠标光标移出
   */
  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }


  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
