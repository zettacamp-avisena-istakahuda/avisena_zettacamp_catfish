import { Component, OnInit } from '@angular/core';
import { BookManagementService } from 'src/app/book-service/book-management.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(
    public book: BookManagementService

  ) { }

  data: object = {}
  ngOnInit(): void {
    this.book.bookDetail.subscribe((a) => {
      this.data = a;
    });
  }

  // bookDetail = this.getData();


  // getData() {
  //   let data;
  //   this.book.bookDetail.subscribe((a) => {
      
  //       data = a;

  //   });
  //   return data.author;
  // }


  getTitleData() {
    let data;
    this.book.bookDetail.subscribe((a) => {
      if (a.title) {
        data = "Title: " + a.title;
      }
      else {
        data = "You dont have any selected book yet, Please select from list of book that available";

      }

    });
    return data;
  }

  getAuthorData() {
    let data;
    this.book.bookDetail.subscribe((a) => {
      if (a.author) {
        data = "Author: " + a.author;
      }

    });
    return data;
  }

  getPublisherData() {
    let data;
    this.book.bookDetail.subscribe((a) => {
      if (a.publisher) {
        data = "Publisher: " + a.publisher;
      }
    });
    return data;
  }

  getPublishedDate() {
    let data;
    this.book.bookDetail.subscribe((a) => {
      if (a.publishDate) {
        data = "Published Date: " + a.publishDate;
      }
    });
    return data;
  }

}
