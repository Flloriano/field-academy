import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    HeaderComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
