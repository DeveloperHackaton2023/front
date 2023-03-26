import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit{

  private osiNumber : number = 0;

  constructor(private adminService: AdminService,
    private router: Router) {
    
  }
  ngOnInit() {
    if(!this.adminService.IsInitialized) {
      this.adminService.initialize().subscribe(b => {
        this.setOsiNumber = this.adminService.getOsiNumber;
      });
    }
  }

  set setOsiNumber(v: number) {
    this.osiNumber = v;
  }

  get getOsiNumber() {
    return this.osiNumber;
  }

  get isInitialized() {
    return this.adminService.IsInitialized;
  }

  public powerOff() {
    this.router.navigateByUrl('/');
  }
}
