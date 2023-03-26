import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private clientService: ClientService) {

  }

  get isInitialized() {
    return this.clientService.IsInitialized;
  }

}
