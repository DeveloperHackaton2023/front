import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {RegistrComponent} from './components/registr/registr.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'registration', component: RegistrComponent},
  {path: "user", loadChildren: () => import('./user-admin/user-admin.module').then((m) => m.UserAdminModule)},

  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
