import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFacpvComponent } from './create-facpv.component';



const routes: Routes = [
  {
    path: '',
    component: CreateFacpvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateFacpvRoutingModule { }