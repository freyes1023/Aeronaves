import { Component, OnInit } from '@angular/core';
import { User } from '@interfaces/User.model';
import { Alquiler } from '@modules/home/models/alquiler.model';
import { HomeService } from '@modules/home/services/home.service';

@Component({
  selector: 'app-list-rental',
  templateUrl: './list-rental.component.html',
  styleUrls: ['./list-rental.component.scss']
})
export class ListRentalComponent implements OnInit {
  Alquileres:Alquiler[] = [];
  constructor(private homeServices : HomeService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
   const user:User = JSON.parse(localStorage.getItem('User')!) 
    this.homeServices.GetUserAlquiler(user.id)
    .subscribe((data) => {
      data.forEach((userAlquiler)=>{
        this.homeServices.GetAlquiler(userAlquiler.id)
        .subscribe((alquiler) => {         
          //this.Alquileres.push(alquiler)   
          console.log(data);
            this.homeServices.GetAeronave(alquiler.idAeronave!.toString())
            .subscribe((dataNave) => {
              const textDescripcion : string = `Alquilaste la 🚀 ${dataNave.Name} para ${alquiler.idsPasajeros.length} pasajeros 👨🏾‍🚀  el con destino a ${alquiler.nameDestino} 🪐 con salida el 📅 ${alquiler.fechaSalida} y llegada el ${alquiler.fechaLlegada} 📅 `   
              const dataAlquiler:Alquiler ={...alquiler,description:textDescripcion,dataAeronave:{...dataNave}}       
              this.Alquileres.push(dataAlquiler)   
              console.log(dataAlquiler);
              
            }, error => {
              console.error(error);
            })
        }, error => {
          console.error(error);
        })
      
      })
    }, error => {
      console.error(error);
    })
  }
}
