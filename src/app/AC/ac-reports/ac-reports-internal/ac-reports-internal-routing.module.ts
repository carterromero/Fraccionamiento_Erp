import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcReportsInternalComponent } from './ac-reports-internal.component';


const routes: Routes = [
  {
    path:'',
    component: AcReportsInternalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcReportsInternalRoutingModule { }
