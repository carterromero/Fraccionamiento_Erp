import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportEmployeeListComponent} from './reportemployee-list.component';

const routes: Routes = [
  {
    path: '',
    component: ReportEmployeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportEmployeeListRoutingModule { }
