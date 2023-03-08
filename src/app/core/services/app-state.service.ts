import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PreferencesService } from './preferences.service';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  static username$ = new BehaviorSubject<string | null>('admin');
  static isLoading$ = new BehaviorSubject<boolean>(false);
  constructor() { }
  static async loadState() {
    const username = await PreferencesService.getUsername() || 'admin';
    AppStateService.username$.next(username);
  }
  static resetAll() {
    AppStateService.username$.next('admin');
    PreferencesService.removeAll();
  }
}
