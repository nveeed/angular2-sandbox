import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {Person} from './person.class';
import {PeopleService} from "./people.service";

@Component({
    selector: 'people-list',
    template: `
    <h3 *ngIf="person">{{person.id}}: {{person.name}}</h3>
    <back-btn></back-btn>
    `,
})
export class PersonDetailComponent implements OnInit{
    person: Person;

    constructor(private peopleService: PeopleService, private route: ActivatedRoute){}

    ngOnInit(){
        this.route.params.subscribe(params => this.person = this.peopleService.getPerson(+params['id']));
    }
}