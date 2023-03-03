import { Component, OnInit } from '@angular/core'; //AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';


/*
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
*/

@Component({
  selector: 'app-root',
  template:`
  <!--app-input [contador]="addValue"></app-input>
  <button (click)="add()">Add</button-->
  <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h2>{{getDados.idade}}</h2>
  </ng-template>
  <app-output (enviarDados)="setDados($event)"></app-output>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {    //DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  constructor() { 
  }

  public addValue: number = 0;
  public getDados: {nome: string, idade: number } | undefined;

  public add(){
    this.addValue += 1;
  }

  public setDados(event: { nome: string, idade: number }){
    this.getDados = event;
  }


  ngOnInit(): void { }
  // ngDoCheck(): void { 
  //   console.log("ngDoCheck");
  // }
  // ngAfterContentInit(): void { 
  //   console.log("ngAfterContentInit");
  // }
  // ngAfterContentChecked(): void {
  //   console.log("ngAfterContentChecked");
  // }
  // ngAfterViewInit(): void {
  //   console.log("ngAfterViewInit");
  // }
  // ngAfterViewChecked(): void {
  //   console.log("ngAfterViewChecked");
  // }
  

}
//ng generate --help
//ng g c title


// comando para criar componente no pelo terminal ng g c [nome do componente a ser criado] <app-input></app-input> 