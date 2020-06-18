import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatePermissionsComponent } from './update-permissions.component';


const routes: Routes = [
  {
    path: '',
    component: UpdatePermissionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePermissionsRoutingModule { }