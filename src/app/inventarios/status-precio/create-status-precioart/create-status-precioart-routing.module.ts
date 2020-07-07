import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStatusPrecioartComponent } from './create-status-precioart.component';







const routes: Routes = [
  {
    path: '',
    component: 
    CreateStatusPrecioartComponent
  
 
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class CreateStatusPrecioartRoutingModule{ }