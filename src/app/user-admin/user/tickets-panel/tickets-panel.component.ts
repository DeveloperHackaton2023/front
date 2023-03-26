import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Ticket } from 'src/app/services/admin-models/ticket';
import { AdminService } from 'src/app/services/admin.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-tickets-panel',
  templateUrl: './tickets-panel.component.html',
  styleUrls: ['./tickets-panel.component.css']
})
export class TicketsPanelComponent implements OnInit {

  protected displayedColumns = ['id', 'subject', 'description', 'created'];

  constructor(private clientService: ClientService, 
    private router: Router, 
    private activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }


  get isInitialized() {
    return this.clientService.IsInitialized;
  }

  public openTicket(ticket: Ticket) {
    this.router.navigate(['edit', ticket.id], {relativeTo: this.activeRoute})
  }

}
