import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserdashboardComponent } from './create-userdashboard.component';



const routes: Routes = [
  {
    path: '',
    component: CreateUserdashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateUserdashboardRoutingModule { }