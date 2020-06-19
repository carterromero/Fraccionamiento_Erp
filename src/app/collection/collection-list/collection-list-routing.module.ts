import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { collectionListComponent} from './collection-list.component';

const routes: Routes = [
  {
    path: '',
    component: collectionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class collectionListRoutingModule { }