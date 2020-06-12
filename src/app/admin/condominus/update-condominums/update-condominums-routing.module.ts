import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateCondominumsComponent } from './update-condominums.component';

const routes: Routes = [
  {
    path: '',
    component:  UpdateCondominumsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateCondominumsRoutingModule { }