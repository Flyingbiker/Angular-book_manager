import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-book-view',
  templateUrl: './edit-book-view.component.html',
  styleUrls: ['./edit-book-view.component.css']
})
export class EditBookViewComponent implements OnInit {

  book: any;

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.book = this.bookService.getBookInfos(+id);
  }

  /**
   *
   */
  onSubmitEditBook() {
    this.bookService.editBook(
      this.book.id,
      this.book.title,
      this.book.author,
      this.book.desc,
      this.book.status,
      );

    this.router.navigate(['/books']);
  }

}
