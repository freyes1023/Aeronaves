import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch : 'full'
  },
  {
    path:'home',
    loadChildren: () =>
      import('@modules/home/home.module').then(
        (m) => m.HomeModule
      ), 
  },
  {
    path:'login',
    loadChildren: () =>
      import('@modules/Login/login.module').then(
        (m) => m.LoginModule
      ), 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
