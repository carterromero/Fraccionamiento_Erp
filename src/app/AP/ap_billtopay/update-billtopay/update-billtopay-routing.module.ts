import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateBilltopayComponent} from './update-billtopay.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateBilltopayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateBilltopayRoutingModule { }