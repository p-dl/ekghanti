import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
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
  static async removeAll() {
    await Preferences.clear();
  }
}
