import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupplierDetailsComponent } from './supplier-details.component';



const routes: Routes = [
  {
    path: '',
    component: SupplierDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class SupplierDetailsRoutingModule { }