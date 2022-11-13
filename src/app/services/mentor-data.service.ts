import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorDataService {

  data = require('../../assets/JSON/mentor.json')
  dataMentor = new BehaviorSubject(this.data)
  constructor() {
   }

   addData(data: object){
      this.data.push(data)
      this.dataMentor.next(this.data)
   }
}
