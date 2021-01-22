import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../services/book/book.service";

@Component({
  selector: 'app-single-book-view',
  templateUrl: './single-book-view.component.html',
  styleUrls: ['./single-book-view.component.css']
})
export class SingleBookViewComponent implements OnInit {

  book: any;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve id of the book in the URL
    const id = this.route.snapshot.params.id;

    this.book = this.bookService.getBookInfos(+id);
  }

}
