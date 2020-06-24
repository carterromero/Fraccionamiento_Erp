import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CreatePayrollRoutingModule } from './create-payroll-routing.module';
import {SharedModule} from '../../theme/shared/shared.module';
import { CreatePayrollComponent } from './create-payroll.component';

@NgModule({
  declarations: [CreatePayrollComponent],
  imports: [
    CommonModule,
    CreatePayrollRoutingModule,
    SharedModule
  ]
})
export class CreatePayrollModule { }