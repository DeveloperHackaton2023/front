import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAdminRoutingModule } from './user-admin-routing.module';
import { MyTicketsComponent } from './components/my-tickets/my-tickets.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { UserAdminDashboardComponent } from './components/user-admin-dashboard/user-admin-dashboard.component';
import { UserAdminHeaderComponent } from './components/user-admin-header/user-admin-header.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyTicketsComponent,
    TicketDetailComponent,
    CreateTicketComponent,
    UserAdminHeaderComponent,
    UserAdminDashboardComponent
  ],
  imports: [
    CommonModule,
    UserAdminRoutingModule,
    FormsModule
  ]
})
export class UserAdminModule { }
