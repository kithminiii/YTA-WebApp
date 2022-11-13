import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RunPayrollComponent } from './run-payroll/run-payroll.component';
import { PayrollComponent } from './payroll.component';

const routes: Routes = [
  {
    path: 'runpayroll',
    component: PayrollComponent
  },
  {
    path: 'payrollhistory',
    component: RunPayrollComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
