import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userData = [
    {
      ID: '934798',
      Name: 'Heba Y. Toma',
      Age: 26,
      Gender: 'Female',
      Email: 'jahrakal@yahoo.com',
      Position: 'Flank',
      Marital: 'Single',
      birthDate: new Date("2019-01-16"),
      addresses: [{
        Address: 'Kuwait',
        Zipcode: 79879,
        City: 'Kuwait City',
        Country: 'Kuwait'
      },
      {
        Address: 'Wilderness 2',
        Zipcode: 79879,
        City: 'Konaka',
        Country: 'India'
      }],
    },
    {
      ID: '8847359379',
      Name: 'Rahaf Toma',
      Age: 24,
      Gender: 'Female',
      Email: 'barathrum69@yahoo.com',
      Position: 'Frontline',
      Marital: 'Single',
      birthDate: new Date("2019-01-16"),
      addresses: [{
        Address: 'Damascus',
        Zipcode: 776789,
        City: 'Damascus',
        Country: 'Syria'
      }],
    },
    {
      ID: '669986',
      Name: 'Arya Purnama',
      Age: 27,
      Gender: 'Male',
      Email: 'arya@yahoo.com',
      Position: 'Flank',
      Marital: 'Single',
      birthDate: new Date("2019-01-16"),
      addresses: [{
        Address: 'Jalan Gaharu',
        Zipcode: 79879,
        City: 'Delhi',
        Country: 'India'
      },
      {
        Address: 'Jalan Semangka',
        Zipcode: 79879,
        City: 'Mumbai',
        Country: 'India'
      }],
    },
    {
      ID: '889085',
      Name: 'Ängkára Agnî',
      Age: 57,
      Gender: 'Female',
      Email: 'ignis@yahoo.com',
      Position: 'Flank',
      Marital: 'Single',
      birthDate: new Date("2019-01-16"),
      addresses: [{
        Address: 'Suryanamashkar street',
        Zipcode: 79879,
        City: 'Bangalore',
        Country: 'India'
      }],
    },
    {
      ID: '887685',
      Name: 'Crème Brulée',
      Age: 57,
      Gender: 'Female',
      Email: 'creamy@yahoo.com',
      Position: 'Flank',
      Marital: 'Single',
      birthDate: new Date("2019-01-16"),
      addresses: [{
        Address: 'Suryanamashkar street',
        Zipcode: 79879,
        City: 'Dakar',
        Country: 'Pakistan'
      }],
    }
  ]
  constructor() { }

  getData(id: string) {
    let data = {}
    const getData = this.userData.find(element => element.ID === id)
    if (getData) {
      data = getData
    }
    return getData
  }


  addData(form: any) {
    this.userData.push(form)
  }

  editData(form: any) {
    let editData = this.userData.findIndex(element => element.ID === form.ID)
    if (editData >= 0) {
      this.userData[editData] = form
    }
  }

}


