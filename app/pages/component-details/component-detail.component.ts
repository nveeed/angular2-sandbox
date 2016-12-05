import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Component({
    selector: 'component-detail',
    template: `
    <h2>{{pageTitle}}</h2>
    {{compTitle}}
    <my-component title="compTitle"></my-component>
    `,
})
export class ComponentDetailComponent implements OnInit{
    pageTitle = 'Component Detail';
    compTitle = 'init';

    constructor(private route:ActivatedRoute){}

    ngOnInit() {
        this.route.params
            .subscribe((params:Params) => this.compTitle = params['slug']);
    }
}