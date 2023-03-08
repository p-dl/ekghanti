import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { AuthStateService } from 'src/app/core/services';
import { PreferencesService } from 'src/app/core/services/preferences.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements ViewWillEnter {
  loginForm: FormGroup;
  logo = '';
  constructor(private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private toast: ToastService
  ) {
    this.loginForm = this.fb.group({
      user: ['admin', Validators.required],
    });
    this.http.get('assets/images/logo.jpg', { responseType: 'blob' }).subscribe((blob: Blob) => {
      const reader = new FileReader();
      reader.onload = () => {
        this.logo = reader.result as string;
      };
      reader.readAsDataURL(blob);
    });
  }
  ionViewWillEnter(): void {
  }
  onSubmit(formDirective: FormGroupDirective) {
    if(this.loginForm.valid){
      PreferencesService.setUsername(this.loginForm.value.user);
      this.toast.show(`Welcome! ${this.loginForm.value.user}`, 'success');
      AuthStateService.authUser.next({isLoggedIn: true});
      this.router.navigateByUrl('/dashboard', { replaceUrl: true });
      formDirective.resetForm();
    }
  }
}
