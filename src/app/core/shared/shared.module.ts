import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorInterceptor } from '@services/auth/auth-interceptor.interceptor';


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
  ],
  providers:[ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorInterceptor,
    multi: true
  }]
})
export class SharedModule { }
