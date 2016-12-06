import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PeopleComponent} from './people.component';
import {PeopleListComponent} from './people-list.component';
import {PersonDetailComponent} from './person-detail.component';

const routes = [
    {
        path: 'people',
        component: PeopleComponent,
        children: [
            {
                path: '',
                component: PeopleListComponent,
            },
            {
                path: 'person/:id',
                component: PersonDetailComponent,
            },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PeopleRoutingModule {
}
