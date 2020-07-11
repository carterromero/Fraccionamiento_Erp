import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcUpdateVisitorsComponent } from './ac-update-visitors.component';


const routes: Routes = [
  {
    path: '',
    component: AcUpdateVisitorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcUpdateVisitorsRoutingModule { }
