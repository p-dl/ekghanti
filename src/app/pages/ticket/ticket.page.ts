import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewWillEnter } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { assignedBy, assignees } from 'src/app/core/fake-data';
import { Ticket } from 'src/app/core/interfaces/ticket.interface';
import { AppStateService } from 'src/app/core/services/app-state.service';
import { PreferencesService } from 'src/app/core/services/preferences.service';
import { ToastService } from 'src/app/core/services/toast.service';
@Component({
  selector: 'app-ticket',
  templateUrl: 'ticket.page.html',
  styleUrls: ['ticket.page.scss'],
})
export class TicketPage implements ViewWillEnter {
  static counter: number = AppStateService.ticketState$.value[AppStateService.ticketState$.value.length - 1].id + 1 || 5166;
  ths: Array<string> = [];
  tableItems = new BehaviorSubject<Ticket[]>([])
  errorMessage = '';
  selectOptionsForm: FormGroup;
  assignedBy = assignedBy;
  assignees = assignees;
  @ViewChild('formElement') formElement!: ElementRef<HTMLFormElement>;
  constructor(private fb: FormBuilder,
    private toast: ToastService,
  ) {
    this.selectOptionsForm = this.fb.group({
      id: TicketPage.counter++,
      assignedBy: ['', Validators.required],
      group: ['', Validators.required],
      assignedTo: ['', Validators.required],
      project: ['', Validators.required],
      vertical: '',
      subVertical: '',
      ticketStatus: '',
      from: '',
      to: '',
      customerNumber: ['', Validators.required],
    });
  }
  onSubmit(ev: Event) {
    ev.preventDefault();
    if (this.selectOptionsForm.valid) {
      PreferencesService.addNewTicket(this.selectOptionsForm.value).then(() => {
        this.formElement.nativeElement.reset();
        this.toast.show(`New ticket info added.`, 'success');
        this.ths = Object.keys(AppStateService.ticketState$.value[0]);
        this.tableItems.next(AppStateService.ticketState$.value)
      })
    }
  }
  onClearAllTickets() {
    PreferencesService.removeAllTickets().then(() => {
      this.tableItems.next([]);
      this.toast.show(`All tickets are cleared.`, 'info');
    })
  }
  ionViewWillEnter(): void {
    this.ths = Object.keys(AppStateService.ticketState$.value[0] ?? []);
    this.tableItems.next(AppStateService.ticketState$.value);
  }
}
