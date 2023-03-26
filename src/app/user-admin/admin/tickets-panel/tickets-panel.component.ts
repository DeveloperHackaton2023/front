import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Ticket } from 'src/app/services/admin-models/ticket';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-tickets-panel',
  templateUrl: './tickets-panel.component.html',
  styleUrls: ['./tickets-panel.component.css']
})
export class TicketsPanelComponent implements OnInit {

  protected displayedColumns = ['subject', 'description', 'created', 'status', 'adminResponse'];

  constructor(private adminService: AdminService, 
    private router: Router, 
    private activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  get getTickets() {
    return this.adminService.getTickets;
  }

  get isInitialized() {
    return this.adminService.IsInitialized;
  }

  public openTicket(ticket: Ticket) {
    this.router.navigate(['edit', ticket.id], {relativeTo: this.activeRoute})
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

}
