import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcUpdateTenantsComponent } from './ac-update-tenants.component';


const routes: Routes = [
  {
    path: '',
    component: AcUpdateTenantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcUpdateTenantsRoutingModule { }
