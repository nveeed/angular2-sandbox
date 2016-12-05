import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {Page1Component} from './pages/page-1/page-1.component'
import {Page2Component} from './pages/page-2/page-2.component'
import {MyComponent} from './components/my-component/my-component.component'
import {AppRoutingModule} from './app-routing.module'

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        Page1Component,
        Page2Component,
        MyComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
