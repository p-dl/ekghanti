import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TicketRoutingModule } from './ticket-routing.module';
import { TicketPage } from './ticket.page';

@NgModule({
  declarations: [
    TicketPage
  ],
  imports: [
    SharedModule,
    TicketRoutingModule,
  ]
})
export class TicketModule {
}
