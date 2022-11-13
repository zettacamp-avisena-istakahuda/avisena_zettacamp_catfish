import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserManagement';
  url = true ;

  constructor(private router: Router,
   
    ) {
   
  }

  ngDoCheck() {
    if (this.router.url == "/"){
      this.url = true;
    }
    else{
      this.url = false;
    }
  }

}

