import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CheckInComponent } from './Pages/aeronaves/check-in/check-in.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'check-in/:id',
    component:CheckInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
