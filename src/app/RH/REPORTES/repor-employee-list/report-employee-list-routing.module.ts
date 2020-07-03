import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReporEmployeeListComponent} from './repor-employee-list.component';

const routes: Routes = [
  {
    path: '',
    component: ReporEmployeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportEmployeeListRoutingModule { }
