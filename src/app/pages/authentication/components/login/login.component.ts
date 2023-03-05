import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStateService, ToastService } from '../../../../core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private toastService: ToastService,
    ) {
      this.loginForm = this.formBuilder.group({
        username: ['admin', Validators.required],
      });
  }

  onLogin(): void {
    if (!this.isValid()) {
      return;
    }
    AuthStateService.authUser.next({
      isLoggedIn: true
    });
    this.router.navigateByUrl('/', { replaceUrl: true }).then();
  }
  private isValid(): boolean {
    if (this.loginForm.status === 'INVALID') {
      this.toastService.toast('Enter valid data', 'error');
      return false;
    }
    return true;
  }
}
