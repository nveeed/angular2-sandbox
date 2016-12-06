import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import {Location} from "../../../node_modules/@angular/common/src/location/location";

@Component({
    moduleId: module.id,
    selector: 'back-btn',
    template: `<button (click)="goBack()">{{title}}</button>`,
})
export class BackBtnComponent {
    @Input()
    title = 'Go Back';

    constructor(private location: Location){}

    goBack(): void {
        this.location.back()
    }
}