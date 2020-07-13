import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateStatusComponent } from './update-status.component';






const routes: Routes = [
  {
    path: '',
    component: UpdateStatusComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class UpdateStatusRoutingModule { }