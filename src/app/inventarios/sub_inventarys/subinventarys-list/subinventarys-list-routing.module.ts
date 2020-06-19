import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubinventarysListComponent} from './subinventarys-list.component';

const routes: Routes = [
  {
    path: '',
    component: SubinventarysListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubinventarysListRoutingModule { }