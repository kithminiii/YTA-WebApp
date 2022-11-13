import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollRoutingModule } from './payroll-routing.module';
import { PayrollComponent } from './payroll.component';
import { RunPayrollComponent } from './run-payroll/run-payroll.component';


@NgModule({
  declarations: [
    PayrollComponent,
    RunPayrollComponent,
  ],
  imports: [
    CommonModule,
    PayrollRoutingModule
  ]
})
export class CoupensModule { }
