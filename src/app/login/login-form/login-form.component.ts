import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SubSink } from 'subsink';
import { ApiServiceService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username = new FormControl('');
  password = new FormControl('');

  private subsLogin = new SubSink();

  constructor(private service: ApiServiceService) { }

  ngOnInit(): void {

  }

  login() {
    this.subsLogin.sink = this.service.login(this.username.value, this.password.value).subscribe(resp => {
      if (resp) {
        console.log(resp)
        localStorage.setItem('token', resp.data.getToken.message)
      }

    })
  }
}
