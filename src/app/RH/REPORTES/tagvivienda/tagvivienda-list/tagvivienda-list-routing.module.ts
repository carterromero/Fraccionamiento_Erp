import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagviviendaListComponent} from 'src/app/RH/REPORTES/tagvivienda/tagvivienda-list/tagvivienda-list.component';

const routes: Routes = [
  {
    path: '',
    component: TagviviendaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagviviendaListRoutingModule { }
