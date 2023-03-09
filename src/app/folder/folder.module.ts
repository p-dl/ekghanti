import { NgModule } from '@angular/core';
import { FolderPageRoutingModule } from './folder-routing.module';
import { FolderPage } from './folder.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    FolderPageRoutingModule,
    SharedModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
