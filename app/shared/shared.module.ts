import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BackBtnComponent} from './back-btn/back-btn.component';
import {HighlightDirective} from './highlight-directive/highlight.directive';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        BackBtnComponent,
        HighlightDirective
    ],
    exports: [
        BackBtnComponent,
        HighlightDirective
    ],
})
export class SharedModule {
}
