import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HousesPanelComponent } from './houses-panel/houses-panel.component';
import { TicketsPanelComponent } from './tickets-panel/tickets-panel.component';
import { UsersPanelComponent } from './users-panel/users-panel.component';



const routes: Routes = [
  {path: '', component: AdminPanelComponent,
  children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'users', component: UsersPanelComponent},
    {path: 'houses', component: HousesPanelComponent},
    {path: 'tickets', component: TicketsPanelComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
