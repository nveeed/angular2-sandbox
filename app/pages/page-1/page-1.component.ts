import { Component } from '@angular/core';

@Component({
    selector: 'page-1',
    template: `
    <h2>{{title}}</h2>
    <my-component title="My Component"></my-component>
    `,
})
export class Page1Component {
    title = 'Page1';
}