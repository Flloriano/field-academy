import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    HeaderComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent,
    TodoButtonDeleteAllComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
