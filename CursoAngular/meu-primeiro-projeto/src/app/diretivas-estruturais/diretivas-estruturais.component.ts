import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{ nome: string, idade: number }> =
    [
      { nome: "Elias Floriano", idade: 30 },
      { nome: "Emanuel Floriano", idade: 18 },
      { nome: "Gael Floriano", idade: 20 }
    ];

  public nome: string = "Elias";
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000)
  }


  public OnClick() {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public OnClickAddList(){
    this.list.push({ nome: "Daniel Floriano", idade: 26});
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1)
  }

}

