import {Component, OnInit} from '@angular/core';
import {IBook} from '../ibook';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
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

  deleteBook() {
    if (confirm('Ban co muon xoa khong')) {
      this.bookService.deleteBook(this.id).subscribe(() => {
        this.router.navigate(['']);
        alert('Xoa thanh cong');
      });
    }
  }

}
