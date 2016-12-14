import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {Page1Component} from './pages/page-1/page-1.component'
import {Page2Component} from './pages/page-2/page-2.component'

import {AppRoutingModule} from './app-routing.module'
import {PeopleModule} from './feature-areas/people/people.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        PeopleModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        Page1Component,
        Page2Component,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
