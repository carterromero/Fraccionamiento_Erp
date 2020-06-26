import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgreementsListComponent } from './agreements-list.component';

const routes: Routes = [
  {
    path: '',
    component: AgreementsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgreementsListRoutingModule { }
