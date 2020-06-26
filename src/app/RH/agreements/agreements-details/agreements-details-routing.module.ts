import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgreementsDetailsComponent } from './agreements-details.component';

const routes: Routes = [
  {
    path: '',
    component: AgreementsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgreementsDetailsRoutingModule { }