import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[nvdHighlight]'
})
export class HighlightDirective {
    @HostListener('mouseenter') onMouseEnter($event: any) {
        $event.target.style.color = "#0f0";
    }
}
