import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Elias";
  public idade: number = 30;
  public maisUm: number = 1;

  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://vidafullstack.com.br/wp-content/uploads/2021/03/angular.jpg"
  public imgTitle: string = "Property Binding";
  public imgAlt: string = "PROTERTY BINDING"
  

  public position: { x: number, y: number } = { x: 0, y: 0 };
  // any => permite usar qualquer coisa
  
  constructor() {  }



  ngOnInit(): void { }


  public alertaInfo(valor: MouseEvent) {
    //alert(valor);
    console.log(valor)
  }

  public mouseMoveTeste(valor: MouseEvent) {
    console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}
