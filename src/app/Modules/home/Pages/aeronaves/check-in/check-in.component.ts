import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, } from '@angular/router';
import { User } from '@interfaces/User.model';
import { Alquiler } from '@modules/home/models/alquiler.model';
import { Destino } from '@modules/home/models/destinos.model';
import { Naves } from '@modules/home/models/naves.model';
import { HomeService } from '@modules/home/services/home.service';
import { Subscription } from 'rxjs';
import Swal, { SweetAlertIcon } from 'sweetalert2';

interface pasajero {
  id: number;
  name: string
}
@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit, OnDestroy {
  nave$: Subscription;
  nave: Naves | undefined;
  Destinos: Destino[] = [];
  Users: User[] | undefined;
  idNave: string = '';
  AlquilerForm!: FormGroup;
  Logo: any
  pasajeros: pasajero[] = [];
  StringIdsPasajeros: string = ''
  loading = false;
  dispatched = false;
  constructor(private route: ActivatedRoute, private homeService: HomeService, private formBuilder: FormBuilder,private router: Router,) {
    this.nave$ = this.route.params.subscribe((data) => {
      this.idNave = data.id;
      console.log(this.idNave);
    })
  }

  ngOnInit(): void {
    this.getData();
    this.AlquilerForm = this.formBuilder.group({
      destino: ['', [Validators.required]],
      fechaLlegada: ['', [Validators.required]],
      fechaSalida: ['', [Validators.required]],
      User: ['']
    });
  }
  get FC() { return this.AlquilerForm.controls; }

  getAeronave() {
    this.homeService.GetAeronave(this.idNave)
      .subscribe((data) => {
        this.nave = data
      }, error => {
        console.error(error);
      })
  }
  getData() {
    this.getDestinos();
    this.getUsers();
    this.getAeronave();
  }

  getDestinos() {
    this.homeService.GetDestinos()
      .subscribe((data) => {
        this.Destinos = data;
      }, error => {
        console.error(error);
      })
  }
  getUsers() {
    this.homeService.GetUsers()
      .subscribe((data) => {
        this.Users = data;
      }, error => {
        console.error(error);
      })
  }
  ngOnDestroy() {
    this.nave$.unsubscribe();
  }
  addPasagejero() {
    const idpasajero = this.AlquilerForm.get('User')?.value
    if (idpasajero) {
      const pasajero = this.Users?.find((data) => {
        return data.id = idpasajero
      })
      const dataPasajero: pasajero = { id: pasajero!.id, name: pasajero!.name }
      this.pasajeros.push(dataPasajero);
      this.StringIdsPasajeros = [...this.pasajeros.map(element => element.id)].join(',').toString();
    }
    const indexPasajero = this.Users?.findIndex((data) => {
      return data.id = idpasajero
    })
    this.Users?.splice(indexPasajero!, 1)
  }

  alquilar() {
    this.dispatched = true;

    if (this.AlquilerForm.valid) {
      if (this.pasajeros.length ) {
        this.loading = true;
        const destino:Destino |undefined = this.Destinos.find((destino) => {
          return destino.id == this.AlquilerForm.get('destino')?.value
        })
        const dataAlquiler: Alquiler = {
          "idDestino": this.AlquilerForm.get('destino')?.value,
          "fechaLlegada": this.AlquilerForm.get('fechaLlegada')?.value,
          "fechaSalida": this.AlquilerForm.get('fechaSalida')?.value,
          "idAeronave": this.nave?.id,
          "idsPasajeros": this.StringIdsPasajeros,
          "nameDestino" : destino?.destino
        }

        this.homeService.alquilar(dataAlquiler)
          .subscribe((data) => {
            console.log(data);
            const user: User = JSON.parse(localStorage.getItem('User')!)
            const dataAlquilerUSer = {
              "idAlquiler": data.id,
              "idUser": user.id
            }
            this.homeService.setAlquilerUser(dataAlquilerUSer)
              .subscribe((data) => {
                console.log(data);
                this.alert("Alquiler registrado correctamente!", 'success')
                .then((data)=>{
                  if(data.dismiss || data.isConfirmed){
                    this.router.navigateByUrl('/home/listRentals')
                  }
                })

                this.loading = false;
              }, error => {
                this.loading = false;
                this.alert("Alquiler no registrado !", 'error')
                console.error(error);
              })
          }, error => {
            this.loading = false;
            this.alert("Alquiler no registrado !", 'error')
            console.error(error);
          })
      } else {
        this.alert('Debes asignar al menos 1 pasajero', 'info')
      }
    }
  }

  alert(text: string, type: SweetAlertIcon) {
    return Swal.fire({
      title: text,
      icon: type,
      confirmButtonText: 'Aceptar'
    })
  }
}






