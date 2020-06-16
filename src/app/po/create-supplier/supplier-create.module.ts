import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SupplierCreateRoutingModule } from './supplier-create-routing.module';
import { CreateSupplierComponent } from './create-supplier.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CreateSupplierComponent],
  imports: [
    CommonModule,
    SupplierCreateRoutingModule,
    SharedModule
  ]
})
export class SupplierCreateModule { 



}