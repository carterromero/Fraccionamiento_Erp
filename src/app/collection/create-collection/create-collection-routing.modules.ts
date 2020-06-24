import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatecollectionComponent} from './create-collection.component';

const routes: Routes = [
  {
    path: '',
    component: CreatecollectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class createcollectionRoutingModule { }