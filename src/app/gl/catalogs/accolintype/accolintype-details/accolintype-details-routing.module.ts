import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccolintypeDetailsComponent } from './accolintype-details.component';

const routes: Routes = [
  {
    path: '',
    component: AccolintypeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccolintypeDetailsRoutingModule { }