import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateConciliacionARComponent} from './update-conciliacion-ar.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateConciliacionARComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateConciliacionRoutingModule { }