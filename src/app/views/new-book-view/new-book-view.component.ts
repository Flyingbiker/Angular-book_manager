import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BookService} from "../../services/book/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-book-view',
  templateUrl: './new-book-view.component.html',
  styleUrls: ['./new-book-view.component.css']
})
export class NewBookViewComponent implements OnInit {

  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  /**
   *
   * @param form
   */
  onSubmitNewBook(form: NgForm) {

    const bookName = form.value.bookName,
      authorName = form.value.authorName,
      bookDesc = form.value.bookDesc,
      bookStatus = form.value.bookStatus;

    this.bookService.addBook(bookName, authorName, bookDesc, bookStatus);

    this.router.navigate(['/books']);

  }

}
