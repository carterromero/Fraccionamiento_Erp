import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateAddressComponent} from './update-address.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateAddressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateAddressRoutingModule { }