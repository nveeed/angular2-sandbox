import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <p>
    <a routerLink="/page-1">Page1</a>&nbsp;&nbsp;
    <a routerLink="/page-2">Page2</a>&nbsp;&nbsp;
    <a routerLink="/people">People Area</a>&nbsp;&nbsp;
    </p>
   <router-outlet></router-outlet>
    `,
})
export class AppComponent {
    title = 'Angular Sandbox';
}