import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { EmployeesComponent } from './employees/employees.component';
import { HiringComponent } from './hiring/hiring.component';
import { PeopleComponent } from './people/people.component';
import { TeamsComponent } from './teams/teams.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { ListViewComponent } from './list-view/list-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DeactiveComponent } from './deactive/deactive.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    EmployeesComponent,
    HiringComponent,
    PeopleComponent,
    TeamsComponent,
    SublevelMenuComponent,
    ListViewComponent,
    NavbarComponent,
    LoginComponent,
    DeactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
