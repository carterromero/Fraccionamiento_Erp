import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEntrysComponent } from './create-entrys.component';

const routes: Routes = [
  {
    path: '', 
    component:  CreateEntrysComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateEntrysRoutingModule { }