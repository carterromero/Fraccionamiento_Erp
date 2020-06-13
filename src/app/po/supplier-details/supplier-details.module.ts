import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';
import { SupplierDetailsRoutingModule } from './supplier-details-routing.module';
import { SupplierDetailsComponent } from './supplier-details.component';

@NgModule({
  declarations: [SupplierDetailsComponent],
  imports: [
    CommonModule,
    SupplierDetailsRoutingModule,
    SharedModule
  ]
})
export class SupplierDetailsModule { 



}