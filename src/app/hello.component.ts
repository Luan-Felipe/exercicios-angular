import { Component, VERSION } from "@angular/core";


@Component({
    selector: 'hello',
    templateUrl: './hello.component.html',
    styleUrls: ['hello.component.css']
})

export class HelloComponent {
    name = `Angular ` + VERSION.major;
}