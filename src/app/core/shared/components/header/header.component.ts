import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 Logo
 icn_signOut = '../../../../../assets/icons/sign-out.svg'
  constructor(private router : Router) { 
    const n = Math.floor(Math.random() * 8) + 1;
    this.Logo = `../../../assets/img/Naves/Nave${n}.svg`}

  ngOnInit(): void {
  }

  Logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
  goToRental(){
    this.router.navigateByUrl('/home/listRentals');
  }
  goToHome(){
    this.router.navigateByUrl('/home');
  }
}
