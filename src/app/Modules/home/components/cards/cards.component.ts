import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
@Input('Id')id : number|undefined = 0;
@Input('Title')title : string| undefined = '';
@Input('Text')text : string| undefined = '';
@Input('Img')img : string| undefined = '';
@Input('Data')data : any;
@Input('TextButton')textButton : string = 'Alquilar';
@Input('ViewButton')viewButton : boolean = true;
@Output('clickButton')clickButton :EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clickButtonFn(){
    this.clickButton.emit(this.data)
  }
}
