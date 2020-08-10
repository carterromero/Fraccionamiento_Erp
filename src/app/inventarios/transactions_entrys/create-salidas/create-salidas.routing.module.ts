import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSalidasComponent } from './create-salidas.component';


const routes: Routes = [
  {
    path: '', 
    component:  CreateSalidasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateSalidasRoutingModule { }