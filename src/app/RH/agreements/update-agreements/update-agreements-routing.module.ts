import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateAgreementsComponent} from './update-agreements.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateAgreementsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateAgreementsRoutingModule { }