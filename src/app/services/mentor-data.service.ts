import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorDataService {

  data = require('../../assets/JSON/mentor.json')
  dataMentor = new BehaviorSubject(this.data)
  constructor() {

   }
}
