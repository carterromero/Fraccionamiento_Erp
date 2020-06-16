import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';


import { UpdateSupplierComponent } from './update-supplier.component';
import { SupplierUpdateRoutingModule } from './supplier-update-routing.module';

@NgModule({
  declarations: [UpdateSupplierComponent],
  imports: [
    CommonModule,
    SupplierUpdateRoutingModule,
  

    SharedModule
  ]
})
export class SupplierUpdateModule { 



}