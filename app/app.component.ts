import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <a routerLink="/page-1">Page1</a>
   <router-outlet></router-outlet>
    `,
})
export class AppComponent {
    title = 'Angular Sandbox';
}