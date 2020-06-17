import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateManageBanksComponent } from './create-manage-banks.component';



const routes: Routes = [
  {
    path: '',
    component: 
    CreateManageBanksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class ManageBanksCreateRoutingModule { }