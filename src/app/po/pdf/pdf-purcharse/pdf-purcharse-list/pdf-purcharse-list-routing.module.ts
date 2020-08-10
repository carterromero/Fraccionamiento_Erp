import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdfPurcharseListComponent } from './pdf-purcharse-list.component';




const routes: Routes = [
  {
    path: '',
    component: 
    PdfPurcharseListComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class PdfPurcharseListRoutingModule { }