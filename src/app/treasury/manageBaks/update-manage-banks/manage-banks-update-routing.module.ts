import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UpdateManageBanksComponent } from './update-manage-banks.component';



const routes: Routes = [
  {
    path: '',
    component: UpdateManageBanksComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class ManageBanksUpdateRoutingModule { }