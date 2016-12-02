import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-component',
    templateUrl: 'my-component.html',
    styleUrls: ['my-component.scss']
})
export class MyComponent {
    @Input()
    title = 'title';
}