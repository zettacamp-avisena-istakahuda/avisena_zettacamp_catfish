import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


interface IData {
  postId: number,
  id: number;
  name: string;
  email: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ROOT_URL = 'https://jsonplaceholder.typicode.com'
  data: IData[] = [];
  dataAPI = new BehaviorSubject(this.data)
  constructor(public http: HttpClient) {
    this.getPosts()
  }

  getPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe(
      (resp: any) => {
        resp.map((m: any) => {
          this.data.push(m)
        }
        )
      }
    )
  }

  deleteData(id: number) {
    // OFFLINE
    let index = 0;
    for (let a of this.data) {
      if (this.data[index].id === id) {
        this.data.splice(index, 1)
        break;
      }
      index++;
    }
    //OFFLINE

    //API
    fetch('https://jsonplaceholder.typicode.com/comments/' + (id), {
      method: 'DELETE',
    });
    //API
  }

  postData(name: string, email: string, body: string, userId: number) {
    // API
    fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      body: JSON.stringify({
        postId: userId,
        name: name,
        email: email,
        body: body,
        userId: userId
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json());
    //API


    //OFFLINE
    let max = Math.max(...this.data.map(o => o.id))
    console.log(max)
    let inputData = {
      postId: userId,
      id: max + 1,
      name: name,
      email: email,
      body: body,
    }
    this.data.push(inputData)
    //OFFLINE
  }

  editData(id: number, postId: number, name: string, email: string, body: string) {
    //OFFLINE
    let index = 0;
    for (let a of this.data) {
      if (this.data[index].id === id) {
        this.data[index].postId = postId
        this.data[index].name = name
        this.data[index].email = email
        this.data[index].body = body
        break;
      }
      index++;
    }
    //OFFLINE



    //API
    fetch('https://jsonplaceholder.typicode.com/comments/' + id, {
      method: 'PUT',
      body: JSON.stringify({
        postId: postId,
        name: name,
        email: email,
        body: body,
        userId: id
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json());
    //API
  }
}
