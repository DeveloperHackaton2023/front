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

import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketsPanelComponent } from './tickets-panel/tickets-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserRoutingModule } from './user-routing.module';
import { MainInfoTableComponent } from './dashboard/main-info-table/main-info-table.component';
import { MainHousesTableComponent } from './dashboard/main-houses-table/main-houses-table.component';
import { MainPricesTableComponent } from './dashboard/main-prices-table/main-prices-table.component';
import { TicketCreationComponent } from './dashboard/ticket-creation/ticket-creation.component';




@NgModule({
  declarations: [
    UserPanelComponent,
    DashboardComponent,
    TicketsPanelComponent,
    MainInfoTableComponent,
    MainHousesTableComponent,
    MainPricesTableComponent,
    TicketCreationComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
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
export class UserModule { }
