import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageBanksListComponent } from './manage-banks-list.component';



const routes: Routes = [
  {
    path: '',
    component: ManageBanksListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class ManageBanksListRoutingModule { }