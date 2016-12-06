import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <p><a routerLink="/page-1">Page1</a></p>
    <p><a routerLink="/page-2">Page2</a></p>
    <p><a routerLink="/my-component/My Component">Page with params</a></p>
    <p><a routerLink="/people">People Area</a></p>
   <router-outlet></router-outlet>
    `,
})
export class AppComponent {
    title = 'Angular Sandbox';
}