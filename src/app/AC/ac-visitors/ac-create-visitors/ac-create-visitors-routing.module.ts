import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcCreateVisitorsComponent } from './ac-create-visitors.component';


const routes: Routes = [
  {
    path: '',
    component: AcCreateVisitorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcCreateVisitorsRoutingModule { }
