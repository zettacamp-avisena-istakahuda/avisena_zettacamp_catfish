import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { UserServiceService } from 'src/app/services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";


@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {

  action = 'SUBMIT'
  action2 = 'Creation'
  genders = ['Male', 'Female'];
  selectedPosition = '';
  position = [
    { value: 'Flank' },
    { value: 'Wing' },
    { value: 'Archer' },
    { value: 'Frontline' }
  ];

  selectedMarital = '';
  marital = [
    { value: 'Single' },
    { value: 'Married' },
  ];

  creationForm1: any

  constructor(
    public userData: UserServiceService,
    public route: ActivatedRoute,
    public router: Router,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'in']);
    translate.setDefaultLang('in');
    translate.use('in');
  }


  ngOnInit(): void {

    this.creationForm1 = new FormGroup({
      'ID': new FormControl(null, [Validators.required]),
      'Name': new FormControl(null),
      'Age': new FormControl(null),
      'Gender': new FormControl(null),
      'Email': new FormControl(null),
      'Position': new FormControl(null),
      'Marital': new FormControl(null),
      'addresses': new FormGroup({
        'Address': new FormControl(null),
        'Zipcode': new FormControl(null),
        'City': new FormControl(null),
        'Country': new FormControl(null),
      })
    })

    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.getData(params['id'])
      }
    });
  }

  getData(id: string) {
    let data: any = {}
    data = this.userData.getData(id);
    this.creationForm1.patchValue(
      data
    );

    this.action = 'EDIT'
    this.action2 = 'Edit'
  }

  onSubmit() {
    if (this.action == 'SUBMIT') {
      this.userData.addData(this.creationForm1.value)
    }

    else if (this.action == 'EDIT') {
      this.userData.editData(this.creationForm1.value)
    }
    this.router.navigate(['/'])
  }
}
