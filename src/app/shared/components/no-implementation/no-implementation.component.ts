import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-no-implementation',
    templateUrl: './no-implementation.component.html',
    styleUrls: ['./no-implementation.component.scss'],
})
export class NoImplementationComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() { }
    onGoBack(): void {
        this.router.navigateByUrl('', { replaceUrl: true });
    }
}
