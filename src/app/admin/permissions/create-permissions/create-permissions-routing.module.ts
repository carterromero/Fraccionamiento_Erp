import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePermissionsComponent } from './create-permissions.component';


const routes: Routes = [
  {
    path: '',
    component: CreatePermissionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePermissionsRoutingModule { }