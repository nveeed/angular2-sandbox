import { Component, OnInit } from '@angular/core';
import {Person} from './person.class';
import {PeopleService} from "./people.service";

@Component({
    selector: 'people-list',
    template: `
    <h2>People List</h2>
    <ul *ngIf="people.length">
        <li *ngFor="let bnda of people">
            <a routerLink="./person/{{bnda.id}}">{{bnda.name}}</a>
        </li>
    </ul>
    `,
})
export class PeopleListComponent implements OnInit{
    people: Person[] = [];

    constructor(private peopleService: PeopleService){}

    ngOnInit(){
        this.people = this.peopleService.getPeople();
    }
}