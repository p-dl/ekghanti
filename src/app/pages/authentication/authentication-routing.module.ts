import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginPage } from './components';
import { LoginGuard } from "../../core/guards";

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    canActivate: [LoginGuard]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthenticationRoutingModule { }
