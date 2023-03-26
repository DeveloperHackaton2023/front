import { Component } from '@angular/core';
import { House } from 'src/app/services/admin-models/house';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-main-houses-table',
  templateUrl: './main-houses-table.component.html',
  styleUrls: ['./main-houses-table.component.css']
})
export class MainHousesTableComponent {

  protected houses!: House[];

  protected displayedColumns: string[] = 
  ['address', 'flatNumber'];

  constructor(private clientService: ClientService) {
    this.houses = clientService.Houses;
  }
}
