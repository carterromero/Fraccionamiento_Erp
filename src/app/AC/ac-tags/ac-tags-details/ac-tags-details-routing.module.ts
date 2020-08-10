import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcTagsDetailsComponent } from './ac-tags-details.component';


const routes: Routes = [
  {
    path:'',
    component: AcTagsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcTagsDetailsRoutingModule { }
