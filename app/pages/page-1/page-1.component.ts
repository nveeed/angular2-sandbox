import { Component } from '@angular/core';

@Component({
    selector: 'page-1',
    template: `<h2>{{title}}</h2>`,
})
export class Page1Component {
    title = 'Page1';
}