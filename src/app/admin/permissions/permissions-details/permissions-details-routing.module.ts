import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissionsDetailsComponent } from './permissions-details.component';



const routes: Routes = [
  {
    path: '',
    component: PermissionsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionsDetailsRoutingModule { }