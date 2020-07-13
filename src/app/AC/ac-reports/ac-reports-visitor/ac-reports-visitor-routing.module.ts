import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcReportsVisitorComponent } from './ac-reports-visitor.component';


const routes: Routes = [
  {
    path:'',
    component: AcReportsVisitorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcReportsVisitorRoutingModule { }
