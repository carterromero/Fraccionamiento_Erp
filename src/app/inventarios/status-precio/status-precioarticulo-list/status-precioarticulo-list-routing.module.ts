import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusPrecioarticuloListComponent } from './status-precioarticulo-list.component';






const routes: Routes = [
  {
    path: '',
    component: 
    StatusPrecioarticuloListComponent
  
 
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class StatusPrecioarticuloListRoutingModule{ }