import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UpdateTransfersComponent } from './update-transfers.component';



const routes: Routes = [
  {
    path: '',
    component: UpdateTransfersComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class TransfersUpdateRoutingModule { }