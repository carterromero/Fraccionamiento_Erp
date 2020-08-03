import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReporteARListComponent} from './resporte-ar-list.component';

const routes: Routes = [
  {
    path: '',
    component: ReporteARListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteARListRoutingModule { }
