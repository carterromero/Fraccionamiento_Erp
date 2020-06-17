import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateCreditorComponent} from './update-creditor.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateCreditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateCreditorRoutingModule { }