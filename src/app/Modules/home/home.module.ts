import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@core/shared/shared.module';
import { HomeService } from './services/home.service';
import { ListAeronavesComponent } from './Pages/aeronaves/list-aeronaves/list-aeronaves.component';
import { CheckInComponent } from './Pages/aeronaves/check-in/check-in.component';
import { CardsComponent } from './components/cards/cards.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListAeronavesComponent,
    CheckInComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers:[HomeService]
})
export class HomeModule { }
