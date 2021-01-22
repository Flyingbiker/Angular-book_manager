import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book/book.service";

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css']
})
export class BooksViewComponent implements OnInit {

  books: Array<any>;
  tableHeaders: Array<string>;

  constructor(private bookService: BookService) {

  }

  ngOnInit() {
    this.books = this.bookService.books;

    this.tableHeaders = ['Title', 'Author', 'Status'];
  }

  /**
   *
   * @param newStatus
   */
  onClickSwitchAllBooksStatus(newStatus) {
    this.bookService.switchAllBooksStatus(newStatus);
  }

}
