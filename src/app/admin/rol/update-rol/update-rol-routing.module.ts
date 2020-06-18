import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateRolComponent } from './update-rol.component';


const routes: Routes = [
  {
    path: '',
    component: UpdateRolComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateRolRoutingModule { }