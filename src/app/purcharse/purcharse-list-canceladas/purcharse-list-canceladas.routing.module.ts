import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurcharseListCanceladasComponent } from './purcharse-list-canceladas.component';



const routes: Routes = [
  {
    path: '',
    component: PurcharseListCanceladasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurcharseListCanceladasRoutingModule { }