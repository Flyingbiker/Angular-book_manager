import {Component, Input, OnInit} from '@angular/core';
import {BookService} from "../../services/book/book.service";

@Component({
  selector: '[app-table-item]',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css']
})
export class TableItemComponent implements OnInit {

  @Input() item: any;
  @Input() headers: Array<string>;

  detailsUrl: string;
  editUrl: string;

  constructor(private bookService: BookService) { }

  /**
   * Lifecycle method
   */
  ngOnInit(): void {

    this.detailsUrl = '/book/' + this.item.id;
    this.editUrl = '/book/edit/' + this.item.id;

  }

  /**
   *
   */
  onClickChangeBookStatus() {
    this.bookService.switchBookStatus(this.item.id);
  }

}
