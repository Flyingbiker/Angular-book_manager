import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthViewComponent} from "./views/auth-view/auth-view.component";
import {BooksViewComponent} from "./views/books-view/books-view.component";
import {AuthGuardService} from "./services/auth-guard/auth-guard.service";
import {ErrorViewComponent} from "./views/error-view/error-view.component";
import {SingleBookViewComponent} from "./views/single-book-view/single-book-view.component";
import {NewBookViewComponent} from "./views/new-book-view/new-book-view.component";
import {EditBookViewComponent} from "./views/edit-book-view/edit-book-view.component";
import {ProfilViewComponent} from "./views/profil-view/profil-view.component";

const routes: Routes = [
  { path: 'auth', component: AuthViewComponent },
  { path: 'profil', canActivate: [AuthGuardService], component: ProfilViewComponent },
  { path: 'books', canActivate: [AuthGuardService], component: BooksViewComponent },
  { path: 'book/new', canActivate: [AuthGuardService], component: NewBookViewComponent },
  { path: 'book/edit/:id', canActivate: [AuthGuardService], component: EditBookViewComponent },
  { path: 'book/:id', canActivate: [AuthGuardService], component: SingleBookViewComponent },
  { path: '', canActivate: [AuthGuardService], component: BooksViewComponent },
  { path: 'not-found', component: ErrorViewComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
