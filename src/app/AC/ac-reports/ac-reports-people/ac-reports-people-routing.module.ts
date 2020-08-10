import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcReportsPeopleComponent } from './ac-reports-people.component';


const routes: Routes = [
  {
    path:'',
    component: AcReportsPeopleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcReportsPeopleRoutingModule { }
