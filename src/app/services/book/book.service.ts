import { Injectable } from '@angular/core';
import { UtilService } from "../util/util.service";
import { Product } from "../../models/product.model";


@Injectable({
  providedIn: 'root'
})

export class BookService {

  books: Array<Product>;

  constructor() {

    this.books = [];

    // Generate 6 books
    for(let i = 1; i <= 6; i++) {

      this.books.push(new Product(
        i,
        'Livre ' + i,
        'Auteur ' + i,
        'Desc ' + i,
        'libre'
      ));

    }

  }


  /**
   * Function for push a new book on the books array
   * @param bookName String: The name of the book we want to add on the array
   * @param authorName String: The name of the author we want to add on the array
   * @param bookDesc String: The description of the book we want to add on the array
   * @param bookStatus String: The status of the book we want to add on the array
   */
  addBook(bookName: string, authorName: string,
          bookDesc: string, bookStatus: string) {
   

        this.books.push(new Product(
          this.books[(this.books.length - 1)].id + 1, 
          bookName, authorName,bookDesc,bookStatus
          ))
      }

  /**
   *
   * @param bookId
   * @param bookName
   * @param authorName
   * @param bookDesc
   * @param bookStatus
   */
  editBook(bookId: number, bookName: string,
           authorName: string, bookDesc: string,
           bookStatus: string) {
    this.books[bookId - 1].title = bookName;
    this.books[bookId - 1].author = authorName;
    this.books[bookId - 1].desc = bookDesc;
    this.books[bookId - 1].status = bookStatus;
  }

  /**
   *
   * @param bookId
   */
  getBookInfos(bookId) {
    return UtilService.findElementByAttr(this.books, 'id', bookId);
  }

  /**
   *
   * @param newStatus
   */
  switchAllBooksStatus(newStatus) {
    this.books.forEach((book) => {
      book.status = newStatus;
    });
  }

  /**
   *
   * @param bookId
   */
  switchBookStatus(bookId) {

    const book = UtilService.findElementByAttr(this.books, 'id', bookId);
    book.status = book.status === 'pris' ? 'libre' : 'pris';

  }

}
