import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateGeneralComponent} from './create-general.component';

const routes: Routes = [
  {
    path: '',
    component: CreateGeneralComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateGeneralRoutingModule { }