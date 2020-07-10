import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfArticulogListComponent } from './pdf-articulog-list.component';

const routes: Routes = [
  {
    path: '',
    component: PdfArticulogListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfArticulogListRoutingModule { }