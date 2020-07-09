import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JournalslinDetailsComponent } from './journalslin-details.component';

const routes: Routes = [
  {
    path: '',
    component: JournalslinDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalslinDetailsRoutingModule { }