import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateConciliacionComponent} from './update-conciliacion.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateConciliacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateConciliacionRoutingModule { }