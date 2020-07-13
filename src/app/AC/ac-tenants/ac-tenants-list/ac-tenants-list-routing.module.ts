import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcTenantsListComponent } from './ac-tenants-list.component';


const routes: Routes = [
  {
    path: '',
    component: AcTenantsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcTenantsListRoutingModule { }
