import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Naves } from '@modules/home/models/naves.model';
import { HomeService } from '@modules/home/services/home.service';

@Component({
  selector: 'app-list-aeronaves',
  templateUrl: './list-aeronaves.component.html',
  styleUrls: ['./list-aeronaves.component.scss']
})
export class ListAeronavesComponent implements OnInit {
  Naves: Naves[] | undefined;
  constructor(private homeService: HomeService, private router : Router) { }

  ngOnInit(): void {
  this.getAeronaves();
  }
  getAeronaves(){
    this.homeService.GetAeronaves()
    .subscribe((data) => {
      this.Naves = [...data]      
      console.log(data);
    }, error => {
      console.error(error);
    })
  }
  NaveSelected($nave:Naves){
    console.log($nave);
    const idNave = $nave.id.toString()
    this.router.navigate(['/home/check-in',idNave])
  }
}
