import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersPanelComponent } from './users-panel/users-panel.component';
import { HousesPanelComponent } from './houses-panel/houses-panel.component';
import { TicketsPanelComponent } from './tickets-panel/tickets-panel.component';




@NgModule({
  declarations: [
    AdminPanelComponent,
    DashboardComponent,
    UsersPanelComponent,
    HousesPanelComponent,
    TicketsPanelComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    
  ]
})
export class AdminModule { }
