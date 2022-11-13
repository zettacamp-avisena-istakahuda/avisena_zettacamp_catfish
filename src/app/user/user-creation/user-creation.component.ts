import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms'
import { UserServiceService } from 'src/app/services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";
import { FormBuilder } from '@angular/forms';
import { FormValidator } from 'src/app/validators/form-validator';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit, DoCheck {
  matcher = new FormValidator();
  countries = require('../../../assets/JSON/countries.json')
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
    public translate: TranslateService,
    public fb: FormBuilder,
  ) {
    translate.addLangs(['en', 'in']);
    translate.setDefaultLang('in');
    translate.use('in');

  }


  ngOnInit(): void {

    this.creationForm1 = new FormGroup({
      'ID': new FormControl(null, Validators.required),
      'Name': new FormControl(null, [Validators.required, this.validatorName.bind(this)]),
      'Age': new FormControl(null, [Validators.required, this.validatorAge.bind(this)]),
      'Gender': new FormControl(null, Validators.required),
      'Email': new FormControl(null, [Validators.email, this.validatorEmail.bind(this)]),
      'Position': new FormControl(null, Validators.required),
      'Marital': new FormControl(null, Validators.required),
      addresses: this.fb.array([]),

    })

    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.getData(params['id'])
      }
    });
    this.addAddresses()
  }

  ngDoCheck(): void {
    this.creationForm1.get('Name').valueChanges.subscribe((value:any) => {
      console.log(value);
      
      //case insensitif//
      const reg = /[^a-z|\s]/i;
      
      let data  = value.replace(reg,'');
      this.creationForm1.get('Name').patchValue(data, {emitEvent:false});

    });
  }

  getData(id: string) {
    let data: any = {}
    data = this.userData.getData(id);
    for (let a of data.addresses) {
      this.addAddresses();
    }


    this.action = 'EDIT'
    this.action2 = 'Edit'
  }


  get addresses(): FormArray {
    return this.creationForm1.get("addresses") as FormArray
  }


  newAddresses(): FormGroup {
    return this.fb.group({
      Address: [null, Validators.required],
      Zipcode: [null, Validators.required],
      City: [null, Validators.required],
      Country: [null],
    })
  }


  addAddresses() {
    this.addresses.push(this.newAddresses());
  }

  removeAddresses(i: number) {
    this.addresses.removeAt(i);
  }

  onSubmit() {
    console.log(this.creationForm1.controls)
    console.log(this.creationForm1.get('Zipcode')?.hasError('required')
    )

    let a = !this.creationForm1.get('ID')?.hasError('required')
      && !this.creationForm1.get('Name')?.hasError('required')
      && !this.creationForm1.get('Age')?.hasError('required')
      && !this.creationForm1.get('Gender')?.hasError('required')
      && !this.creationForm1.get('Email')?.hasError('required')
      && !this.creationForm1.get('Position')?.hasError('required')
      && !this.creationForm1.get('Marital')?.hasError('required')
      && !this.creationForm1.get('Address')?.hasError('required')
      && !this.creationForm1.get('Zipcode')?.hasError('required')
      && !this.creationForm1.get('City')?.hasError('required')
      && !this.creationForm1.get('Country')?.hasError('required')
      && !this.creationForm1.get('Name')?.errors['validatorName']
      && !this.creationForm1.get('Age')?.errors['validatorAge']
      && !this.creationForm1.get('Email')?.errors['validatorEmail'];

    if (this.action == 'SUBMIT' && this.creationForm1.valid) {
      Swal.fire({
        icon: 'success',
        text: 'Data Submitted',
      })
      this.userData.addData(this.creationForm1.value)
      this.router.navigate(['/'])

    }

    else if (this.action == 'EDIT') {
      this.userData.editData(this.creationForm1.value)
      this.router.navigate(['/'])

    }

    else
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fields are not valid',
      })
    }
  }


  validatorName(control: FormControl): { [s: string]: boolean } {

    const reg = /^[a-zA-Z\s]*$/;
    if (!reg.test(control.value || control.value == null)) {
      return { 'validatorName': true };
    } else {
      return { 'validatorName': false };
    }

  }

  validatorAge(control: FormControl): { [s: string]: boolean } {
    if (control.value < 10 || control.value == null) {
      return { 'validatorAge': true };
    }
    return { 'validatorAge': false };
  }

  validatorEmail(control: FormControl): { [s: string]: boolean } {
    const reg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/;
    if (!reg.test(control.value || control.value == null)) {
      return { 'validatorEmail': true };
    } else {
      return { 'validatorEmail': false };
    }
  }

  
  
}
