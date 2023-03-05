import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import { NoPageComponent, NoImplementationComponent } from './components';

@NgModule({
  declarations: [
    NoPageComponent,
    NoImplementationComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NoPageComponent,
    NoImplementationComponent
  ]
})
export class SharedModule {}
