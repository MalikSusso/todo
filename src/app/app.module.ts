import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { TitleComponent } from './title/title.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES : Routes = [
  {path : 'home' , component:HomeComponent},
  {path : 'contact' , component:ContactComponent},
  {path : 'not-found',component:NotFoundComponent},
  {path : 'todos' , component:TodoComponent},
  {path:'single-todo/:id' , component:SingleTodoComponent},
  {path : '' ,component:HomeComponent},
  {path : '**',pathMatch:'full',redirectTo:'not-found'},
]

@NgModule({
  declarations: [
    AppComponent,
    ParagraphComponent,
    TitleComponent,
    HeaderComponent,
    TodoComponent,
    NotFoundComponent,
    SingleTodoComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
