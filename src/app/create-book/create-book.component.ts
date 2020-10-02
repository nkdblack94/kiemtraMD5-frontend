import { Component, OnInit } from '@angular/core';
import {IBook} from '../ibook';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  book: IBook = {
    title: '',
    author: '',
    description: ''
  };

  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
  }

  createBook() {
    this.bookService.createBook(this.book).subscribe(() => {
      this.router.navigate(['']);
    });
  }

}
