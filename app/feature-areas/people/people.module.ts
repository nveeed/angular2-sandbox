import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {PeopleComponent} from './people.component';
import {PeopleRoutingModule} from './people-routing.module';
import {PeopleService} from './people.service';
import {PeopleListComponent} from './people-list.component';
import {PersonDetailComponent} from './person-detail.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        PeopleRoutingModule,
        SharedModule
    ],
    declarations: [
        PeopleComponent,
        PeopleListComponent,
        PersonDetailComponent,
    ],
    providers: [PeopleService],
    bootstrap: [PeopleComponent]
})
export class PeopleModule {
}
