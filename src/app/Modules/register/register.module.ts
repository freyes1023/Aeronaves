import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@core/shared/shared.module';
import { RegisterService } from './services/register.service';
const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  }
  

];


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers:[RegisterService]
})
export class RegisterModule { }
