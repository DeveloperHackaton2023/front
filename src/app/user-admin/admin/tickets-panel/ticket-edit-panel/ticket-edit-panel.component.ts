import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/services/admin-models/ticket';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-ticket-edit-panel',
  templateUrl: './ticket-edit-panel.component.html',
  styleUrls: ['./ticket-edit-panel.component.css']
})
export class TicketEditPanelComponent implements OnInit{
  protected subject = '';
  protected description = '';

  private id!: number;
  private ticket!: Ticket;

  constructor(private activatedRoute: ActivatedRoute, 
    private adminService: AdminService) {
    
  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      if(!this.adminService.IsInitialized) {
        this.adminService.initialize().subscribe(b => {
          this.adminService.getTickets.forEach(t => {
            if(t.id == this.id) {
              this.ticket = t;
              this.Subject = t.subject;
              this.Description = t.description;
            }
          })
        });
      }
      else {
        this.adminService.getTickets.forEach(t => {
          if(t.id == this.id) {
            this.ticket = t;
            this.Subject = t.subject;
            this.Description = t.description;
          }
        })
      }
      
    })
  }

  get Subject() {
    return this.subject;
  }

  set Subject(v : string) {
    this.subject = v;
  }

  get Description() {
    return this.description;
  }

  set Description(v : string) {
    this.description = v;
  }

  get Id() {
    return this.id;
  }

  get getTicket() {
    return this.ticket;
  }
  
  get isInitialized() {
    return this.adminService.IsInitialized;
  }

}
