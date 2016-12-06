import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {Person} from './person.class';
import {PeopleService} from "./people.service";

@Component({
    selector: 'people-list',
    template: `
    <h3 *ngIf="person">{{person.id}}: {{person.name}}</h3>
    <back-btn></back-btn>
    <button *ngIf="person && person.id !== 1" (click)="goToDMDetails()">See DM details</button>
    `,
})
export class PersonDetailComponent implements OnInit{
    person: Person;

    constructor(
        private peopleService: PeopleService,
        private route: ActivatedRoute,
        private router: Router
    ){}

    ngOnInit(): void {
        this.route.params.subscribe(params => this.person = this.peopleService.getPerson(+params['id']));
    }

    goToDMDetails(): void {
        this.router.navigate(['/people/person', 1]);
    }
}