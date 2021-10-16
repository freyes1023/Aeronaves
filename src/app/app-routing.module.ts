import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@core/shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: () =>
      import('./Modules/modules.module').then(
        (m) => m.ModulesModule
      ), 
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
