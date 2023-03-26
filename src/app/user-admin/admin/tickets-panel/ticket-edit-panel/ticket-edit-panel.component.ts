import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditTicket } from 'src/app/services/admin-models/editTicket';
import { Ticket } from 'src/app/services/admin-models/ticket';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-ticket-edit-panel',
  templateUrl: './ticket-edit-panel.component.html',
  styleUrls: ['./ticket-edit-panel.component.css']
})
export class TicketEditPanelComponent implements OnInit{
  private subject = '';
  private description = '';
  private adminResponse = '';

  private selectedStatus = "";

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

  get AdminResponse() {
    return this.adminResponse;
  }

  set AdminResponse(v : string) {
    this.adminResponse = v;
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

  changeStatus(value: number) {

    switch(value) {
      case 0:
        this.selectedStatus = 'Created';
        break;
      case 1:
        this.selectedStatus = 'InProgress';
        break;
      case 2:
        this.selectedStatus = 'Denied';
        break;
      case 3:
        this.selectedStatus = 'Success';
        break;
      default:
        this.selectedStatus = 'Created';
        break;
    }
  }

  onClick() {
    var edit: EditTicket = new EditTicket();
    edit.id = this.id;
    edit.subject = this.subject;
    edit.description = this.description;
    edit.adminResponse = this.adminResponse;
    edit.newStatus = this.selectedStatus;

    this.adminService.editTicket(edit).subscribe(b => {
      this.Subject = '';
      this.Description = '';
    })
  }

}
