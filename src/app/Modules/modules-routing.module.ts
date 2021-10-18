import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@services/guards/auth.guard';

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
      ), canActivate:[AuthGuard]
  },
  {
    path:'login',
    loadChildren: () =>
      import('@modules/Login/login.module').then(
        (m) => m.LoginModule
      ), 
  },
  {
    path:'register',
    loadChildren: () =>
      import('@modules/register/register.module').then(
        (m) => m.RegisterModule
      ), 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
