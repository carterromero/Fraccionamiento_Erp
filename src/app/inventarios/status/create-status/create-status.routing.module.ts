import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStatusComponent } from './create-status.component';





const routes: Routes = [
  {
    path: '',
    component: 
    CreateStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class CreateStatusRoutingModule { }