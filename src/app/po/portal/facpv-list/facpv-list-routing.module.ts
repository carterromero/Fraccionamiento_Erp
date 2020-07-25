import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacpvListComponent } from './facpv-list.component';





const routes: Routes = [
  {
    path: '',
    component: 
    FacpvListComponent
 
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class FacpvListRoutingModule{ }