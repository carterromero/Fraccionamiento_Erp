import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralListComponent} from './general-list.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralListRoutingModule { }