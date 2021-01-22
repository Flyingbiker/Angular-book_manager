import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableComponent } from './components/table/table.component';
import { TableHeadComponent } from './components/table-head/table-head.component';
import { TableItemComponent } from './components/table-item/table-item.component';
import { BooksViewComponent } from './views/books-view/books-view.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { SingleBookViewComponent } from './views/single-book-view/single-book-view.component';
import { NewBookViewComponent } from './views/new-book-view/new-book-view.component';
import { EditBookViewComponent } from './views/edit-book-view/edit-book-view.component';
import { ProfilViewComponent } from './views/profil-view/profil-view.component';

import { BookService } from "./services/book/book.service";
import { AuthService } from "./services/auth/auth.service";
import { HeaderComponent } from './components/header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "./services/user/user.service";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableHeadComponent,
    TableItemComponent,
    BooksViewComponent,
    AuthViewComponent,
    ErrorViewComponent,
    SingleBookViewComponent,
    HeaderComponent,
    NewBookViewComponent,
    EditBookViewComponent,
    ProfilViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    UserService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
