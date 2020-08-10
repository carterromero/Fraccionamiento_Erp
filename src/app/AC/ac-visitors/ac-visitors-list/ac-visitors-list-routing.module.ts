import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcVisitorsListComponent } from './ac-visitors-list.component';


const routes: Routes = [
  {
    path: '',
    component: AcVisitorsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcVisitorsListRoutingModule { }
