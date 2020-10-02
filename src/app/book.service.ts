import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {IBook} from './ibook';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBook(): Observable<IBook[]> {
   return  this.http.get<IBook[]>(API_URL + '/books');
  }

  getBook(id): Observable<IBook> {
    return this.http.get<IBook>(API_URL + `/books/${id}`);
  }

  createBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(API_URL + '/books/', book);
  }

  updateBook(id: number, book: IBook): Observable<IBook> {
    return this.http.put<IBook>(API_URL + `/books/${id}`, book);
  }

  deleteBook(id: number): Observable<IBook> {
    return this.http.delete<IBook>(API_URL + `/books/${id}`);
  }
}
