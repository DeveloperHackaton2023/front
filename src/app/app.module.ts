import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsComponent } from './components/news/news.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgIconsModule } from '@ng-icons/core';
import { matHome } from '@ng-icons/material-icons/baseline'
import { matSupervisedUserCircleOutline } from '@ng-icons/material-icons/outline'
import { cssHome } from '@ng-icons/css.gg';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { PotentialComponent } from './components/potential/potential.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    NewsComponent,
    LoginComponent,
    NotFoundComponent,
    FeedbackComponent,
    PotentialComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule,
    NgIconsModule.withIcons({ cssHome, matHome, matSupervisedUserCircleOutline })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
