import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePreciosComponent } from './create-precios.component';






const routes: Routes = [
  {
    path: '',
    component:
    CreatePreciosComponent
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class CreatePreciostRoutingModule { }