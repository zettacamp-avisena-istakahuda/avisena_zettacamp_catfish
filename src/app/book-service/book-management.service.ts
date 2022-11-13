import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookManagementService {
 bookData = [
  {
  id: 'A1',  
  title: 'Narnia',
  author: 'JK Rowling',
  publisher: 'Gramedia',
  publishDate:'03-11-1999'
 },
 {
  id: 'A2',
  title: "Laskar Pelangi",
  author: "Andrea Hirata",
  publisher: "Bentang Pustaka",
  publishDate: "02-04-2003"
},
{
  id: 'A3',
  title: "Bumi",
  author: "Tere Liye",
  publisher: "Gramedia Pustaka Jakarta",
  publishDate: "13-22-2007"
},
{
  id: 'A4',
  title: "Rindu",
  author: "Tere Liye",
  publisher: "Bentang Pustaka",
  publishDate: "11-10-1999"
}
];
 array = new BehaviorSubject(this.bookData);
 bookDetail = new BehaviorSubject(
  {
  id: '',
  title: '',
  author: '',
  publisher: '',
  publishDate:''
 }
 );

  constructor() { }

}
