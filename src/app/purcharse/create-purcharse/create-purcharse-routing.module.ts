import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePurcharseComponent } from './create-purcharse.component';



const routes: Routes = [
  {
    path: '',
    component: CreatePurcharseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurcharseCreateRoutingModule { }