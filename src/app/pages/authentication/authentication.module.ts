import { NgModule } from '@angular/core';
import { LoginPage } from './components';
import { SharedModule } from '../../shared/shared.module';

import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [LoginPage],
  imports: [
    SharedModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
