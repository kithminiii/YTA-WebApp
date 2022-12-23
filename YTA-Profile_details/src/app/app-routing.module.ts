import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './Components/employees/employees.component';
import { PeopleComponent } from './Components/people/people.component';
import { TeamsComponent } from './Components/teams/teams.component';
import { HiringComponent } from './Components/hiring/hiring.component';
import { PayrollComponent } from './Components/payroll/payroll.component';
import { ListViewComponent } from './Components/list-view/list-view.component';
import { LoginComponent } from './Components/login/login.component';
import { DeactiveComponent } from './Components/deactive/deactive.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { ProfileViewComponent } from './Components/people/profile-view/profile-view.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'employees', component: EmployeesComponent},
  { path: 'people/:id', component: PeopleComponent },
  {path: 'statistics', component: TeamsComponent},
  {
    path: 'payroll',
    loadChildren: () => import('../app/Components/payroll/payroll.module').then(m => m.CoupensModule)
  },
  {path: 'hiring', component: HiringComponent},
  {path:'list-view-active',component:ListViewComponent},
  {path:'login',component:LoginComponent},
  {path:'list-view-deactive',component:DeactiveComponent},
  {path:'signup', component:SignupComponent},
  {path:'forgot', component:ForgotComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
