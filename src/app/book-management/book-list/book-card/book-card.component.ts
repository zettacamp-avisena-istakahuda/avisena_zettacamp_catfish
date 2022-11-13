import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Output() cardSelected = new EventEmitter<object>()
  @Input() bookTitle = {}; 
  @Input() title = '';
  constructor() { }

  ngOnInit(): void {
  }
}
