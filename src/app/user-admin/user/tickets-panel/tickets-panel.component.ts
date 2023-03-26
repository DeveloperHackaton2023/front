import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/services/admin-models/ticket';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-tickets-panel',
  templateUrl: './tickets-panel.component.html',
  styleUrls: ['./tickets-panel.component.css']
})
export class TicketsPanelComponent implements OnInit {

  private tickets!: Ticket[];

  protected displayedColumns = ['subject', 'description', 'created', 'status', 'adminResponse'];

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    if(!this.clientService.IsInitialized) {
      this.clientService.initialize().subscribe(b => {
        this.Tickets = this.clientService.getTickets;
      });
    }
    else {
      this.clientService.updateHouses().subscribe(b => {
        this.Tickets = this.clientService.getTickets;
      })
    }
  }

  getStatusTitle(ticket: Ticket) {
    var lastStatus = ticket.statuses.sort((a, b) => (+a.id > +b.id ? -1 : 1))[0];

    switch(lastStatus.type)
    {
      case 'Created':
        return 'Создано';
      case 'InProgress':
        return 'В обработке'
      case 'Denied':
        return 'Отклонено'
      case 'Success':
        return 'Завершена'
      default:
        return lastStatus.title;
    }
  }

  get Tickets() {
    return this.tickets;
  }

  set Tickets(v) {
    this.tickets = v;
  }

  get isInitialized() {
    return this.clientService.IsInitialized;
  }


}
