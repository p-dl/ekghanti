import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NoImplementationComponent } from './components';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NoImplementationComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NoImplementationComponent,
    HttpClientModule,
    CommonModule
  ]
})
export class SharedModule { }
