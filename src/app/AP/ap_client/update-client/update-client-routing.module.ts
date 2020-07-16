import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateClientComponent} from './update-client.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateClientRoutingModule { }