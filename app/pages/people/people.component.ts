import { Component } from '@angular/core';

@Component({
    selector: 'people',
    template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
    `,
})
export class PeopleComponent {
    title = 'People';
}