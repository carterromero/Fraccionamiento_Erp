import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurcharseDetailsComponent } from './purcharse-details.component';



const routes: Routes = [
  {
    path: '',
    component: PurcharseDetailsComponent
    
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class PurcharseDetailsRoutingModule { }