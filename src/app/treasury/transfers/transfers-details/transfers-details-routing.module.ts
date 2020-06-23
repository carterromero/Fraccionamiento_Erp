import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransfersDetailsComponent } from './transfers-details.component';



const routes: Routes = [
  {
    path: '',
    component: TransfersDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class TransfersDetailsRoutingModule { }