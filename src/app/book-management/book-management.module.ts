import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookManagementComponent } from './book-management/book-management.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCardComponent } from './book-list/book-card/book-card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BookManagementComponent,
    BookListComponent,
    BookCardComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[BookManagementComponent]
})
export class BookManagementModule { }
