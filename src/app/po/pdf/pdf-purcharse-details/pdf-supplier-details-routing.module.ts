import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PdfSupplierDetailsComponent } from './pdf-supplier-details.component';



const routes: Routes = [
  {
    path: '',
    component: PdfSupplierDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class PdfSupplierDetailsRoutingModule { }