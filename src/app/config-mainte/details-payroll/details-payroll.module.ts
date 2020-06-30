import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DetailsPayrollRoutingModule} from './details-payroll-routing.module';
import {SharedModule} from '../../theme/shared/shared.module';
import { DetailsPayrollComponent } from './details-payroll.component';

@NgModule({
  declarations: [DetailsPayrollComponent],
  imports: [
    CommonModule,
     DetailsPayrollRoutingModule,
    SharedModule
  ]
})
export class DetailsPayrollModule { }