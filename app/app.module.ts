import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import {Page1Component} from './pages/page-1/page-1.component'
import {MyComponent} from './components/my-component/my-component.component'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: 'page-1',
                component: Page1Component
            },
            {
                path: '',
                redirectTo: '/page-1',
                pathMatch: 'full'
            }
        ])
    ],
    declarations: [
        AppComponent,
        Page1Component,
        MyComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
