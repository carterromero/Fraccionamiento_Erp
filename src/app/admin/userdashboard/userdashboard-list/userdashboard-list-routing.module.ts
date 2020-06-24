import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdashboardListComponent } from './userdashboard-list.component';


const routes: Routes = [
  {
    path: '',
    component: UserdashboardListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserdashboardListRoutingModule { }