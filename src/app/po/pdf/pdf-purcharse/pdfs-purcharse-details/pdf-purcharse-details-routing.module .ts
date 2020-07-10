import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfPurcharseDetailsComponent } from './pdf-purcharse-details.component';



const routes: Routes = [
  {
    path: '',
    component: PdfPurcharseDetailsComponent
    
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class PdfPurcharseDetailsRoutingModule { }