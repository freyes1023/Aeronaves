import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from './services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  dispatched = false;
  returnUrl: string | undefined;
  Logo
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private registerService: RegisterService
  ) {
    // redirect to home if already logged in
    const n = Math.floor(Math.random() * 8) + 1;
    this.Logo = `../../../assets/img/Logos/Logo${n}.svg`
  }
  get FC() { return this.registerForm.controls; }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['',[ Validators.required, Validators.minLength(4)]],
      email: ['',[ Validators.required, Validators.email]],
      password: ['',[ Validators.required, Validators.minLength(4)]],
      repeatPassword: ['',[ Validators.required, Validators.minLength(4),]]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  register() {    
    this.dispatched = true;
    if (this.registerForm.valid) {
      this.loading = true;
      const dataregister = {...this.registerForm.value}
      delete(dataregister.repeatPassword)
       this.registerService.register(dataregister)
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
