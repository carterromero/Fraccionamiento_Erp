import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PdfHistoriaListComponent } from './pdf-historia-list.component';

const routes: Routes = [
  {
    path: '',
    component: PdfHistoriaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfHistoriaListRoutingModule { }