import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {PeopleComponent} from './people.component';
import {PeopleRoutingModule} from './people-routing.module';
import {PeopleService} from './people.service';
import {PeopleListComponent} from './people-list.component';
import {PersonDetailComponent} from './person-detail.component';
import {BackBtnComponent} from '../../components/back-btn/back-btn.component';

@NgModule({
    imports: [
        BrowserModule,
        PeopleRoutingModule,
    ],
    declarations: [
        PeopleComponent,
        PeopleListComponent,
        PersonDetailComponent,
        BackBtnComponent
    ],
    providers: [PeopleService],
    bootstrap: [PeopleComponent]
})
export class PeopleModule {
}
