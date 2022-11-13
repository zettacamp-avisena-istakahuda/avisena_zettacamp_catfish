import { Component, OnInit, Input } from '@angular/core';
import { BookManagementService } from 'src/app/book-service/book-management.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(
    public book: BookManagementService
  ) { }

  data: Array<any> = []
  ngOnInit(): void {
    this.book.array.subscribe((a) => {
      this.data = a;
    });
  }

  cardClick(event: any){
    this.book.bookDetail.next(event);  
  }
}
