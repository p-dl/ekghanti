import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewWillEnter } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { assignedBy, assignees } from 'src/app/core/fake-data';
import { Ticket } from 'src/app/core/interfaces/ticket.interface';
import { AppStateService } from 'src/app/core/services/app-state.service';
import { PreferencesService } from 'src/app/core/services/preferences.service';
import { ToastService } from 'src/app/core/services/toast.service';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
@Component({
  selector: 'app-ticket',
  templateUrl: 'ticket.page.html',
  styleUrls: ['ticket.page.scss'],
})
export class TicketPage implements ViewWillEnter {
  ths: Array<string> = [];
  tableItems = new BehaviorSubject<Ticket[]>([])
  selectOptionsForm: FormGroup;
  assignedBy = assignedBy;
  assignees = assignees;
  @ViewChild('formElement') formElement!: ElementRef<HTMLFormElement>;
  @ViewChild('tableElement') tableElement!: ElementRef<HTMLTableElement>;
  constructor(private fb: FormBuilder,
    private toast: ToastService,
  ) {
    this.selectOptionsForm = this.fb.group({
      assignedBy: ['', Validators.required],
      group: ['', Validators.required],
      assignedTo: ['', Validators.required],
      project: ['', Validators.required],
      vertical: '',
      subVertical: '',
      ticketStatus: '',
      from: '2023-01-25',
      to: '2023-01-25',
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
  onExport() {
    if (this.tableItems.value.length) {
      const doc = new jsPDF()
      autoTable(doc, { html: this.tableElement.nativeElement })
      doc.save('ek-ghanti-tickets.pdf')
    } else {
      this.toast.show(`Add atleast one ticket to export`, 'error');
    }
  }
  ionViewWillEnter(): void {
    this.ths = Object.keys(AppStateService.ticketState$.value[0] ?? []);
    this.tableItems.next(AppStateService.ticketState$.value);
  }
}
