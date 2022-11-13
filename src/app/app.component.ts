import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_day12';
  posts!: Array<any>;
  id!: number 
  name: string = ''
  email: string = ''
  body: string = ''
  postId!: number 
  action: string = "submit"
  isSubmit = true

  constructor(
    public apiService: ApiService
  ) {
    this.apiService.dataAPI.subscribe((a) => {
      this.posts = a;
    });
  }

  deleteData(id: number) {
    this.apiService.deleteData(id)
  }

  submitData() {
    if (this.action == "submit") {
      this.apiService.postData(this.name, this.email, this.body, this.postId)
    }
    else if (this.action == "edit") {
      this.apiService.editData(this.id, this.postId, this.name, this.email, this.body)
    }
  }

  editDataCard(id: number, postId: number, name: string, email: string, body: string) {
    this.id = id
    this.postId = postId
    this.name = name
    this.email = email
    this.body = body
    this.action = 'edit'
    this.isSubmit = false
  }

  switchToSubmit(){
    this.isSubmit = true
    this.action = "submit"
    this.id = 0
    this.postId = 0
    this.name = ''
    this.email = ''
    this.body = ''

  }
}
