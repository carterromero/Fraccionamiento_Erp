import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTransfersComponent } from './create-transfers.component';



const routes: Routes = [
  {
    path: '',
    component: 
    CreateTransfersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class TransfersCreateRoutingModule { }