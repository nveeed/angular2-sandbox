import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {Page1Component} from './pages/page-1/page-1.component'
import {Page2Component} from './pages/page-2/page-2.component'
import {MyComponent} from './components/my-component/my-component.component'

const appRoutes = [
    {
        path: 'my-component/:slug',
        component: MyComponent
    },
    {
        path: 'page-2',
        component: Page2Component
    },
    {
        path: 'page-1',
        component: Page1Component
    },
    {
        path: '',
        redirectTo: '/page-1',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
