import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketsPanelComponent } from './tickets-panel/tickets-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';



const routes: Routes = [
  {path: '', component: UserPanelComponent,
  children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'tickets', component: TicketsPanelComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
