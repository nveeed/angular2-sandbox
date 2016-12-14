import { Component } from '@angular/core';

@Component({
    selector: 'people',
    template: `
    <h2 nvdHighlight>{{title}}</h2>
    <router-outlet></router-outlet>
    `,
})
export class PeopleComponent {
    title = 'People';
}