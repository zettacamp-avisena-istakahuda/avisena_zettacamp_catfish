import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    public userData: UserServiceService,
    public router: Router,
    public translate: TranslateService
  ) { 
    translate.addLangs(['en', 'in']);
    translate.setDefaultLang('in');
    translate.use('in');
  }

  data = this.userData.userData
  ngOnInit(): void {
  }

  edit(id: string) {
    this.router.navigate(
      ['/edit'],
      { queryParams: { id: id } }
    );

  }

}
