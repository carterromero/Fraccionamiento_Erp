import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcVisitorsDetailsComponent } from './ac-visitors-details.component';


const routes: Routes = [
  {
    path: '',
    component: AcVisitorsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcVisitorsDetailsRoutingModule { }
