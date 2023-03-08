import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

const COLOR_MAP = {
  success: 'primary',
  info: 'tertiary',
  error: 'danger'
};

@Injectable({
  providedIn: 'root'
})
export  class ToastService {

  constructor(public toastCtrl: ToastController) {
  }

   async show(message: string, type: 'success' | 'info' | 'error') {

    const toast = await this.toastCtrl.create({
      message,
      color: COLOR_MAP[type],
      animated: true,
      duration: 2500
    });
    await toast.present();
  }
}
