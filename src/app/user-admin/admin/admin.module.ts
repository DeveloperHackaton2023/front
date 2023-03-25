import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersPanelComponent } from './users-panel/users-panel.component';
import { HousesPanelComponent } from './houses-panel/houses-panel.component';
import { TicketsPanelComponent } from './tickets-panel/tickets-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TicketEditPanelComponent } from './tickets-panel/ticket-edit-panel/ticket-edit-panel.component';




@NgModule({
  declarations: [
    AdminPanelComponent,
    DashboardComponent,
    UsersPanelComponent,
    HousesPanelComponent,
    TicketsPanelComponent,
    TicketEditPanelComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule
  ]
})
export class AdminModule { }
