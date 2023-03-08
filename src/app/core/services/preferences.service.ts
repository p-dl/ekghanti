import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Ticket } from '../interfaces/ticket.interface';
import { AppStateService } from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  constructor() { }
  static async getUsername(): Promise<string | null> {
    const username = await Preferences.get({ key: 'username' });
    return username.value;
  }
  static async setUsername(name: string) {
    await Preferences.set({
      key: 'username',
      value: `${name}`,
    });
    AppStateService.username$.next(name);
  };
  static async removeAllTickets() {
    await Preferences.set({
      key: 'ticketStorage',
      value: `${[]}`,
    });
    AppStateService.ticketState$.next([]);
  }
  static async addNewTicket(ticket:Ticket) {
    AppStateService.ticketState$.value.push(ticket)
      await Preferences.set({
        key: 'ticketStorage',
        value: `${JSON.stringify(AppStateService.ticketState$.value)}`,
      });
    };
    static async getTickets(): Promise<Ticket[]> {
      const state = await Preferences.get({ key: 'ticketStorage' });
      return JSON.parse(state.value?.length? state.value:'[]');
    }
  }