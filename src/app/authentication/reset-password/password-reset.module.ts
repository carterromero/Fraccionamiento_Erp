import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordRoutingModule } from './password-reset-routing.module';
import { ResetPasswordComponent } from './password-reset.component';
import {SharedModule} from '../../theme/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    SharedModule
  ],
  declarations: [ResetPasswordComponent]
})
export class ResetPasswordModule { }
