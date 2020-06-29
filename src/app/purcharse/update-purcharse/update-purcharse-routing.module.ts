import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatePurcharseComponent } from './update-purcharse.component';


const routes: Routes = [
  {
    path: '',
    component:  UpdatePurcharseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePurchaseRoutingModule { }