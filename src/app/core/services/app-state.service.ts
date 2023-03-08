import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ticket } from '../interfaces/ticket.interface';
import { PreferencesService } from './preferences.service';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  static username$ = new BehaviorSubject<string>('admin');
  static ticketState$ = new BehaviorSubject<Array<Ticket>>([])
  // static isLoading$ = new BehaviorSubject<boolean>(false);
  constructor() { }
  static async loadState() {
    const username = await PreferencesService.getUsername() || 'admin';
    const ticketState = await PreferencesService.getTickets() || [];
    AppStateService.username$.next(username);
    AppStateService.ticketState$.next(ticketState)
  }
}
