import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppStateService } from './core/services/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading$ = new BehaviorSubject<boolean>(false);
  constructor() { }
  ngOnInit(): void {
    AppStateService.loadState();
  }
}
