import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TicketPage } from './ticket.page';
const routes: Routes = [
  {
    path: '',
    component: TicketPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TicketRoutingModule {
}
