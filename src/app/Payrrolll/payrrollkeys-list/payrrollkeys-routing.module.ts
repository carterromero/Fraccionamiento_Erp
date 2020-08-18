import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayrrollkeysListComponent } from './payrrollkeys-list.component';






const routes: Routes = [
  {
    path: '',
    component: 
    PayrrollkeysListComponent
 
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class PayrrollkeysListRoutingModule{ }