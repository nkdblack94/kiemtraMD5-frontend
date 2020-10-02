import {Component, OnInit} from '@angular/core';
import {IBook} from '../ibook';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: IBook[] = [];
  quantity: number;

  constructor(private bookService: BookService) {
    this.getAll();
  }

  ngOnInit() {
  }

  getAll(): IBook[] {
    this.bookService.getAllBook().subscribe(b => {
      this.books = b;
      this.quantity = b.length;
    });
    return this.books;
  }

}
