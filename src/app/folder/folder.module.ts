import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FolderPageRoutingModule } from './folder-routing.module';
import { FolderPage } from './folder.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FolderPageRoutingModule,
    SharedModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
