import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  constructor(public route: Router, private router: Router) {
    // this.route.navigate(['content/movies'])
  }

  title = 'AngularMaterial_day1';
  url = true ;
  isShowing: boolean = true

  ngDoCheck() {
    if (this.router.url.includes('/detail')){
      this.url = false;
    }
    else{
      this.url = true;
    }
  }

  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }
  callMethods() {
    this.toggleSidenav();
  }


}


