import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { PeopleComponent } from './people/people.component';
import { TeamsComponent } from './teams/teams.component';
import { PayrollComponent } from './payroll/payroll.component';
import { HiringComponent } from './hiring/hiring.component';
import { ListViewComponent } from './list-view/list-view.component';
import { LoginComponent } from './login/login.component';
import { DeactiveComponent } from './deactive/deactive.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'employees', component: EmployeesComponent},
  { path: 'people/:id', component: PeopleComponent },
  {path: 'statistics', component: TeamsComponent},
  {
    path: 'payroll',
    loadChildren: () => import('./payroll/payroll.module').then(m => m.CoupensModule)
  },
  {path: 'hiring', component: HiringComponent},
  {path:'list-view-active',component:ListViewComponent},
  {path:'login',component:LoginComponent},
  {path:'list-view-deactive',component:DeactiveComponent},
  {path:'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
