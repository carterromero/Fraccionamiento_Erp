import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JournalsDetailsComponent } from './journals-details.component';

const routes: Routes = [
  {
    path: '',
    component: JournalsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalsDetailsRoutingModule { }