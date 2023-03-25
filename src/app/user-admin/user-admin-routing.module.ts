import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTicketsComponent } from './components/my-tickets/my-tickets.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { UserAdminDashboardComponent } from './components/user-admin-dashboard/user-admin-dashboard.component'

const routes: Routes = [
  {path: '', component: UserAdminDashboardComponent ,
  children: [
    {path: 'my-tickets', component: MyTicketsComponent},
    {path: 'my-tickets:id', component: TicketDetailComponent},
    {path: 'create-ticket', component: CreateTicketComponent},
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAdminRoutingModule { }
