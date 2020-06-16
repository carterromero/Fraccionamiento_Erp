import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageBanksDetailsComponent } from './manage-banks-details.component';



const routes: Routes = [
  {
    path: '',
    component: ManageBanksDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class ManageBanksDetailsRoutingModule { }