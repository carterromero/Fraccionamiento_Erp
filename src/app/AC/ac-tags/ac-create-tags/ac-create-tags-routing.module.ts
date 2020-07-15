import { Routes, RouterModule } from '@angular/router';
import { AcCreateTagsComponent } from './ac-create-tags.component';


const routes: Routes = [
  {
    path:'',
    component: AcCreateTagsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcCreateTagsRoutingModule { }
