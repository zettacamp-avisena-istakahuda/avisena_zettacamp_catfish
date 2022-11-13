import { Component, OnInit } from '@angular/core';
import { MentorDataService } from './services/mentor-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';


interface IDataMentor {
  _id: string,
  email: string,
  civility: string,
  first_name: string,
  last_name: string,
  company: ICompany
  user_status: string,
  count_document: number
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
export class AppComponent implements OnInit {
  title = 'AngularMaterial_day2';
  emailFilter = new FormControl();
  lastNameFilter = new FormControl();
  userTypeFilter = new FormControl();
  userStatusFilter = new FormControl();
  filteredValues = { id:'', lastname: '', type: '', email: '', status: '' };



  status = [
    { value: 'active' },
    { value: 'pending' }
  ];
  
  dataMentor: IDataMentor[] = []
  displayedColumns: string[] = ['id', 'name', 'type', 'email', 'status'];
  displayedFilter: string[] = ['idFilter', 'nameFilter', 'typeFilter', 'emailFilter', 'statusFilter'];
  b: IDataMentor[] = []
  dataSource = new MatTableDataSource(this.b)

  constructor(private service: MentorDataService) { 
    this.service.dataMentor.subscribe((a) => {
      let b: IDataMentor[] = []
      this.dataMentor = b
      b = a
      this.dataSource = new MatTableDataSource(b)
    });
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
    // this.dataSource.filterPredicate = (data: IDataMentor, filter: string):any => !filter || data.email == filter;
  }

  customFilterPredicate() {
    const myFilterPredicate = function(data:IDataMentor, filter:any) :boolean {
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

  // applyFilter() {
  //   // const data: IDataMentor = this.dataSource.data;
  //   this.name = this.name === null ? '' : this.name;
  //   console.log(this.dataSource.data)
  //   this.status2 = this.status2 === null ? '' : this.status2;
  //   let filterValue= ''
  //   if (this.name) {
  //     this.dataSource.filterPredicate = function(data, filter: string): boolean {
  //       return data.last_name.toLowerCase().includes(filter);
  //     };
  //     filterValue = this.name
  //   }

  //   else if (this.email) {
  //     this.dataSource.filterPredicate = function(data, filter: string): boolean {
  //       return data.email.toLowerCase().includes(filter);
  //     };
  //     filterValue = this.email

  //   }
  //   else if (this.status2) {
  //     this.dataSource.filterPredicate = function(data, filter: string): boolean {
  //       return data.user_status.toLowerCase().includes(filter);
  //     };
  //     filterValue = this.status2
  //   }
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
}
