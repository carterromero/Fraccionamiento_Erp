import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateGeneralComponent} from './update-general.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateGeneralComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateGeneralRoutingModule { }