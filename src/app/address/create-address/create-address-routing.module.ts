import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAddressComponent} from './create-address.component';

const routes: Routes = [
  {
    path: '',
    component: CreateAddressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAddressRoutingModule { }