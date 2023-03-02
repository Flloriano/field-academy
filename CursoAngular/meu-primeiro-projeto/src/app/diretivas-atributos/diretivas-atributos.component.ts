import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true;
  public heightPX: string = "20px";
  public background: string = "red";
  public nome: string = "";
  public list: Array<{ nome: string }> = [];
  public date:Date = new Date();

  constructor() { }

  ngOnInit(): void {

    setInterval( () => {
      if(this.valor){
        this.valor = false;
      } else {
        this.valor = true;
      }

      if(this.heightPX == '20px'){
        this.heightPX = '50px';
        this.background = 'blue'
      } else {
        this.heightPX = '20px'
        this.background = 'red';
      }
    }, 2000);

  }

  public salvar(){
    this.list.push({ nome: this.nome});
    this.nome = "";
  }

}
