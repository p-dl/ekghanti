import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthState } from '../interfaces';

@Injectable({
  providedIn: 'root'
})

export class AuthStateService {
  static authUser = new BehaviorSubject<AuthState>({isLoggedIn: true});
  constructor() {
  }
  static onLogout() {
    AuthStateService.authUser.next({isLoggedIn: false});
  }
}
