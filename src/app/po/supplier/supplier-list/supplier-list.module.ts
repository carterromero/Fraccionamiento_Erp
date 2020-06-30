import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierListComponent } from './supplier-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import { SupplierListRoutingModule } from './supplier-list-routing.module';

@NgModule({
  declarations: [SupplierListComponent],
  imports: [
    CommonModule,
    SupplierListRoutingModule,
    SharedModule
  ]
})
export class SupplierListModule { 



}