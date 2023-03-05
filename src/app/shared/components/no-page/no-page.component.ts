import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-no-page',
  templateUrl: './no-page.component.html',
  styleUrls: ['./no-page.component.scss'],
})
export class NoPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  onGoBack() : void {
    this.router.navigateByUrl('', {replaceUrl: true});
  }
}
