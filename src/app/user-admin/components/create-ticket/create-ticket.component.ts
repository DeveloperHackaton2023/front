import { Component } from '@angular/core';
// import { TicketService } from '../../../services/ticket.service';
import { TicketInterface } from '../test-ticket-interface';
@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent {
  body = '';
  flat = '';
  header = '';

  // constructor(private ticketService: TicketService){}

  // onSubmit(): void {
  //   this.ticketService.createTicket(this.flat, this.header, this.body);
  //   console.log(this.ticketService.getMyTickets())
  // }
}
