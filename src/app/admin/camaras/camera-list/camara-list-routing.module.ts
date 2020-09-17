import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CamaraListComponent} from './camara-list.component';

const routes: Routes = [
  {
    path: '',
    component: CamaraListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CamaraListRoutingModule { }
