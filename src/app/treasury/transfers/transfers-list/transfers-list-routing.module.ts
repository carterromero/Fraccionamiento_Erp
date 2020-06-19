import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransfersListComponent } from './transfers-list.component';



const routes: Routes = [
  {
    path: '',
    component: TransfersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class TransfersListRoutingModule { }