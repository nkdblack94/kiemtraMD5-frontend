import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowBookComponent} from './show-book/show-book.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {EditBookComponent} from './edit-book/edit-book.component';
import {DeleteBookComponent} from './delete-book/delete-book.component';
import {BookListComponent} from './book-list/book-list.component';


const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'show/:id',
    component: ShowBookComponent
  },
  {
    path: 'create',
    component: CreateBookComponent
  },
  {
    path: 'edit/:id',
    component: EditBookComponent
  },
  {
    path: 'delete/:id',
    component: DeleteBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
