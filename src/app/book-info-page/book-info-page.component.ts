import { Component, OnInit } from '@angular/core';
import { BookManagementService } from 'src/app/book-service/book-management.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-info-page',
  templateUrl: './book-info-page.component.html',
  styleUrls: ['./book-info-page.component.css']
})
export class BookInfoPageComponent implements OnInit {
   id = ''
  constructor
    (public book: BookManagementService,
     public route: ActivatedRoute
    ) { }

  data: Array<any> = []

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.book.array.subscribe((a) => {
      this.data = a;
    });
  }

  getTitle(id: string) {
    const dataBook = this.data.find(element => element.id === id)
    let ret = ''
    if (dataBook) {
      ret = dataBook.title
    }
    return ret;
  }

  getAuthor(id: string) {
    const dataBook = this.data.find(element => element.id === id)
    let ret = ''
    if (dataBook) {
      ret = dataBook.author
    }
    return ret;
  }

  getPublisher(id: string) {
    const dataBook = this.data.find(element => element.id === id)
    let ret = ''
    if (dataBook) {
      ret = dataBook.publisher
    }
    return ret;
  }

  getPublishedDate(id: string) {
    const dataBook = this.data.find(element => element.id === id)
    let ret = ''
    if (dataBook) {
      ret = dataBook.publishDate
    }
    return ret;
  }
}
