import { Component } from '@angular/core';
import { House } from 'src/app/services/admin-models/house';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-ticket-creation',
  templateUrl: './ticket-creation.component.html',
  styleUrls: ['./ticket-creation.component.css']
})
export class TicketCreationComponent {
  private subject = '';
  private description = '';
  private houses!: House[];

  private selectedHouse!: House;

  constructor(private clientService: ClientService) {
    this.houses = clientService.Houses;
  }

  get Houses() {
    return this.houses;
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

  changeHouse(value: House) {
    this.selectedHouse = value;
  }

  onClick() {
    this.clientService.sendTicket(this.Subject, this.Description, this.selectedHouse).subscribe(b => {
      this.Subject = '';
      this.Description = '';
    })
  }
}
