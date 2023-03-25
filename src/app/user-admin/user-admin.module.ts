import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAdminRoutingModule } from './user-admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyTicketsComponent } from './components/my-tickets/my-tickets.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';


@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    MyTicketsComponent,
    TicketDetailComponent,
    CreateTicketComponent
  ],
  imports: [
    CommonModule,
    UserAdminRoutingModule
  ]
})
export class UserAdminModule { }
