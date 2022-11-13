import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
userData = [
{
  ID: '934798',
  Name: 'Jahrakal',
  Age: 57,
  Gender: 'Male',
  Email: 'jahrakal@yahoo.com',
  Position: 'Flank',
  Marital: 'Single',
  addresses: {
    Address: 'Wilderness',
    Zipcode: 79879,
    City: 'Konaka',
    Country: 'Piltover'
  },
},
{
  ID: '8847359379',
  Name: 'Baldur',
  Age: 67,
  Gender: 'Male',
  Email: 'barathrum69@yahoo.com',
  Position: 'Frontline',
  Marital: 'Single',
  addresses: {
    Address: 'Olympus',
    Zipcode: 776789,
    City: 'Northelm',
    Country: 'Zaun'
  },
}
]
  constructor() { }

  getData(id:string){
    let data ={}
    const getData = this.userData.find(element => element.ID ===id)
    if(getData){
      data = getData
      }
      return getData
  }


  addData(form:any)
  {
   this.userData.push(form) 
  }

  editData(form:any){let editData = this.userData.findIndex(element => element.ID ===form.ID)
    if(editData >= 0){
      this.userData[editData] = form
      }
  }

}


