import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePrecioComponent } from './update-precio.component';






const routes: Routes = [
  {
    path: '',
    component: UpdatePrecioComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class UpdatePrecioRoutingModule { }