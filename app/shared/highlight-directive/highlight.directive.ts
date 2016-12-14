import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[nvdHighlight]'
})
export class HighlightDirective {
    @HostListener('mouseenter') onMouseEnter() {
        this.element.nativeElement.style.backgroundColor = 'yellow';
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.element.nativeElement.style.backgroundColor = 'transparent';
    }

    constructor(public element:ElementRef) {

    }

}
