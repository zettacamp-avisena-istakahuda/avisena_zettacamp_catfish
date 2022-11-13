import { Component } from '@angular/core';
import { MentorDataService } from './services/mentor-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserFormComponent } from './user-management/user-form/user-form.component';
import { TranslateService } from "@ngx-translate/core";


interface IDataMentor {
  _id: string,
  email: string,
  civility: string,
  first_name: string,
  last_name: string,
  company: ICompany
  user_status: string,
  count_document: number,
  gender: string,
  date_of_birth: Date
}

interface ICompany {
  name: string,
  user_type: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_material';
  selectedLang = 'en';
  emailFilter = new FormControl();
  lastNameFilter = new FormControl();
  userTypeFilter = new FormControl();
  userStatusFilter = new FormControl();
  filteredValues = { id: '', lastname: '', type: '', email: '', status: '' };
  status = [
    { value: 'active' },
    { value: 'pending' }
  ];

  displayedColumns: string[] = ['id', 'name', 'type', 'email', 'status', 'date_of_birth', 'button'];
  displayedFilter: string[] = ['idFilter', 'nameFilter', 'typeFilter', 'emailFilter', 'statusFilter', 'filter_DOB', 'buttonAdd'];
  b: IDataMentor[] = []
  dataSource = new MatTableDataSource(this.b)

  constructor(
    private service: MentorDataService,
    public dialog: MatDialog,
    private translate: TranslateService
  ) {
    this.service.dataMentor.subscribe((a) => {
      this.dataSource = new MatTableDataSource(a)
    });

    translate.setDefaultLang('en');
    translate.use('en');
  }



  ngOnInit(): void {

    this.lastNameFilter.valueChanges.subscribe((lastNameFilterValue) => {
      this.filteredValues['lastname'] = lastNameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.emailFilter.valueChanges.subscribe((emailFilterValue) => {
      this.filteredValues['email'] = emailFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);

    });

    this.userTypeFilter.valueChanges.subscribe((userTypeFilter) => {
      this.filteredValues['type'] = userTypeFilter;
      this.dataSource.filter = JSON.stringify(this.filteredValues);

    });
    this.userStatusFilter.valueChanges.subscribe((userStatusFilter) => {
      this.filteredValues['status'] = userStatusFilter;
      this.dataSource.filter = JSON.stringify(this.filteredValues);

    });
    this.dataSource.filterPredicate = this.customFilterPredicate();
  }

  customFilterPredicate() {
    const myFilterPredicate = function (data: IDataMentor, filter: any): boolean {
      let searchString = JSON.parse(filter);
      let nameFound = data.last_name.toString().trim().toLowerCase().indexOf(searchString.lastname.toLowerCase()) !== -1
      let emailFound = data.email.toString().trim().toLowerCase().indexOf(searchString.email.toLowerCase()) !== -1
      let typeFound = data.company.user_type.toString().trim().toLowerCase().indexOf(searchString.type.toLowerCase()) !== -1
      let statusFound = data.user_status.toString().trim().toLowerCase().indexOf(searchString.status.toLowerCase()) !== -1

      if (searchString.topFilter) {
        return nameFound || emailFound || typeFound || statusFound
      } else {
        return nameFound && emailFound && typeFound && statusFound
      }
    }
    return myFilterPredicate;
  }

  openDialog(): void {
    this.dialog.open(UserFormComponent, {
      width: '600px',
      data: {
        dataKey: 'Form Input New User',
      }
    });
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

}
