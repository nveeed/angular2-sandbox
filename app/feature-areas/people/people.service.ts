import { Injectable }    from '@angular/core';
import {Person} from './person.class';

const people: Person[] = [
    {
        id: 1,
        name: 'Anees'
    },
    {
        id: 2,
        name: 'Naveed'
    },
    {
        id: 3,
        name: 'Faisal'
    },
    {
        id: 4,
        name: 'Imran'
    },
    {
        id: 5,
        name: 'Humayoon'
    },
];

@Injectable()
export class PeopleService {

    getPeople(): Person[] {
        return people;
    }

    getPerson(id: number): Person {
        return people.find( person => person.id === id );
    }

}
