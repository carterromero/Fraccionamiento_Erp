import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UpdatePayrollRoutingModule} from './update-payroll-routing.module';
import {SharedModule} from '../../theme/shared/shared.module';
import { UpdatePayrollComponent } from './update-payroll.component';

@NgModule({
  declarations: [UpdatePayrollComponent],
  imports: [
    CommonModule,
     UpdatePayrollRoutingModule,
    SharedModule
  ]
})
export class UpdatePayrollModule { }