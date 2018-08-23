import { Directive, 
         Input, 
         Renderer2, // service wrapper for DOM API
         ElementRef, // wrapper for DOM element
         HostListener, // event capturing
} from '@angular/core';

// <div appHighlight />
// <p appHighlight />

// div, p are called 'host element', they host directive appHighlight

// Directive doesn't support template/view
// NO styleUrls
// Used for attribute level
@Directive({
  selector: '[appHighlight]', // [] must
})
export class HighlightDirective {

  @Input()
  color: string;

  // injecting DOM element that contains directive
  constructor(private hostElement: ElementRef,
              private renderer: Renderer2) {
                }

  @HostListener('click')
  onClick() {
    alert('Directive event')
  }

  @HostListener('mouseenter')
  onMouseEnter() {
      // nativeElement is DOM element
      this.renderer.setStyle(this.hostElement.nativeElement,
                              'background', this.color || 'lightgreen');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeStyle(this.hostElement.nativeElement,
                              'background');
  }

}
