import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfSupplierListComponent } from './pdf-supplier-list.component';



const routes: Routes = [
  {
    path: '',
    component: 
    PdfSupplierListComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class SupplierPdfRoutingModule { }