import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressDetailsComponent} from './address-details.component';

const routes: Routes = [
  {
    path: '',
    component: AddressDetailsComponent
  }
];  

///Test Conexion Repositorio


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddressDetailsRoutingModule { }

"prueba cambios ivan"
