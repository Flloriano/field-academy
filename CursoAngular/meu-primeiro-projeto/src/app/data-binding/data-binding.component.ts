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


/*
Diretivas de atributos
Que alteram a aparencia ou comportamento de um elemento, componente ou toutra diretiva

NgClass=> adiciona e remove classes CSS.

NgStyle=> adiciona e remove estilos HTML.

NgModel=> adiciona vinculação de dados a um elemento de formulario HTML.


_________________________________________________________________________________

Diretivas estruturais
Modam ou remodelam a estrutura do DOM. Adicionando, removendo e manipulando os elementos dos hosts que estão anexados.

NgIf => Condicionalmente crira ou destaca visualizações do modelo.

NgFor => Repete um nó para cada item de uma lista

NgSwitch => Conjunto de diretivas que alternam entre visões alternativas.


*/


// criar componente ng g c [nome do componetes]