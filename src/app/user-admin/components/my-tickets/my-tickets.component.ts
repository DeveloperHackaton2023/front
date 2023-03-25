import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket.service';
import { TicketInterface } from '../test-ticket-interface';

import { TicketsTest } from '../testTickets';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit{
  // tickets: TicketInterface[] = this.ticketService.getMyTickets();
  tickets = TicketsTest;
  constructor(private ticketService: TicketService){
  }
  ngOnInit(): void {
  }
  
  // getTickets(): void {
  //   this.ticketService.getMyTickets()
  //       .subscribe(ticket => this.tickets = this.tickets)
  // }

}


