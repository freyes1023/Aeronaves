import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  dispatched = false;
  Logo
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {
    // redirect to home if already logged in
    const n = Math.floor(Math.random() * 8) + 1;
    this.Logo = `../../../assets/img/Logos/Logo${n}.svg`
  }
  get FC() { return this.loginForm.controls; }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['freddy.reyes729@gmail.com',[ Validators.required, Validators.email]],
      password: ['123456789',[ Validators.required, Validators.minLength(4)]]
    });
  }

  login() {    
    this.dispatched = true;
    if (this.loginForm.valid) {
      this.loading = true;
       this.loginService.Login(this.loginForm.value)
      .subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl('/home')
        this.loading = false;
      }, error => {
        this.loading = false;

        console.error(error);
      })
    }
   
  }
}
