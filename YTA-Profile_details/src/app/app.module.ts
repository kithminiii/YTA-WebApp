import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { HiringComponent } from './Components/hiring/hiring.component';
import { PeopleComponent } from './Components/people/people.component';
import { TeamsComponent } from './Components/teams/teams.component';
import { SublevelMenuComponent } from './Components/sidenav/sublevel-menu.component';
import { ListViewComponent } from './Components/list-view/list-view.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { DeactiveComponent } from './Components/deactive/deactive.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ForgotComponent } from './Components/forgot/forgot.component';

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
    DeactiveComponent,
    SignupComponent,
    ForgotComponent
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
