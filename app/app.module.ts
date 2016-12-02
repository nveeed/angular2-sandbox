import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import {Page1Component} from './pages/page-1/page-1.component'

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
        Page1Component
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
