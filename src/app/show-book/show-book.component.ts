import {Component, OnInit} from '@angular/core';
import {IBook} from '../ibook';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.scss']
})
export class ShowBookComponent implements OnInit {
  id: number;
  book: IBook;

  constructor(private bookService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.book = await this.bookService.getBook(this.id).toPromise();
  }

}
