import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateUserdashboardComponent } from './update-userdashboard.component';




const routes: Routes = [
  {
    path: '',
    component: UpdateUserdashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateUserdashboardRoutingModule { }