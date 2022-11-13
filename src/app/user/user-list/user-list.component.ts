import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";
import { RemovewhitespacesPipe } from 'src/app/user/custompipe/removewhitespaces.pipe';
import { RemoveaccentPipe } from 'src/app/user/custompipe/removeaccent.pipe';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  removeWhiteSpaces = new RemovewhitespacesPipe()
  removeAccent = new RemoveaccentPipe()

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
  data2: any
  searchNama: string = ''
  ngOnInit(): void {
  }

  edit(id: string) {
    this.router.navigate(
      ['/edit'],
      { queryParams: { id: id } }
    );
  }

  searchName() {
    this.data = this.userData.userData
    this.data2 = this.data.find(t => this.removeWhiteSpaces.
      transform(this.removeAccent.transform(t.Name).toLowerCase()).includes(this.removeWhiteSpaces.transform(this.removeAccent.transform(this.searchNama).toLowerCase())));
    let data3: any = []
    if (this.data2) {
      data3.push(this.data2)
      this.data = [...data3]
    }


  }

}




