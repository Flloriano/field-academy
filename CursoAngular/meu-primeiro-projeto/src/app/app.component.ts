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
  template:`<app-data-binding></app-data-binding>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {    //DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  constructor() { 
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


// comando para criar componente no pelo terminal ng g c [nome do componente a ser criado]