import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { verticalNavigations } from 'src/app/core/fake-data';

@Component({
    selector: 'app-no-implementation',
    templateUrl: './no-implementation.component.html',
    styleUrls: ['./no-implementation.component.scss'],
})
export class NoImplementationComponent implements OnInit {
    availablePaths: Array<string> = [];
    show404 = false
    public folder!: string;
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
     }

    ngOnInit() {
        this.availablePaths = verticalNavigations.map(nav=>nav.path)
        this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
        if (!this.availablePaths.includes(this.folder)) {
            this.show404 = true
        }
     }
    onGoBack(): void {
        this.router.navigateByUrl('', { replaceUrl: true });
    }
}
