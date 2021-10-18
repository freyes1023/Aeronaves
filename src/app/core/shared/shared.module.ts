import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports:[ 
    HttpClientModule,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule ,
  ]
})
export class SharedModule { }
