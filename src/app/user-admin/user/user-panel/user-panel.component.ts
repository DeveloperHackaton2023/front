import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/services/admin-models/ticket';
import { AdminService } from 'src/app/services/admin.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit{

  constructor(private router: Router, private clientService: ClientService) {
    
  }
  ngOnInit() {
    if(!this.clientService.IsInitialized) {
      this.clientService.initialize().subscribe(b => {
      });
    }
  }

  get Name() {
    return this.clientService.Name;
  }


  get isInitialized() {
    return this.clientService.IsInitialized;
  }

  public powerOff() {
    this.router.navigateByUrl('/');
  }
}
