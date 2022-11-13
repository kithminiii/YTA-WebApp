import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { PeopleComponent } from './people/people.component';
import { TeamsComponent } from './teams/teams.component';
import { PayrollComponent } from './payroll/payroll.component';
import { HiringComponent } from './hiring/hiring.component';
import { ListViewComponent } from './list-view/list-view.component';


const routes: Routes = [
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'employees', component: EmployeesComponent},
  {
    path: 'people',
    loadChildren: () => import('./people/people.module').then(m => m.PeopleModule)
  },
  {path: 'statistics', component: TeamsComponent},
  {
    path: 'payroll',
    loadChildren: () => import('./payroll/payroll.module').then(m => m.CoupensModule)
  },
  {path: 'hiring', component: HiringComponent},
  {path:'list-view',component:ListViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
