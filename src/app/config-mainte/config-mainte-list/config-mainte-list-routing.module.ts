import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigMainteListComponent } from './config-mainte-list.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigMainteListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigmainteListRoutingModule { }