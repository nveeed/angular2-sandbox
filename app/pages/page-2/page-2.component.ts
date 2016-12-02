import { Component } from '@angular/core';

@Component({
    selector: 'page-2',
    template: `
    <h2>{{title}}</h2>
    `,
})
export class Page2Component {
    title = 'Page2';
}