import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { UserFormService } from 'src/app/user-form.service';
import { MentorDataService } from 'src/app/services/mentor-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {


  isEdit: boolean = false;

  constructor(
    private userFormService: UserFormService,
    private mentorService: MentorDataService,
    private route: ActivatedRoute,
    private Router: Router,
    public translateService: TranslateService,
    private fb: FormBuilder,
    private dialog: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }


  forbidenName = ['']

  userForm2: any = new FormGroup({
    _id: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    civility: new FormControl(null, [Validators.required]),
    first_name: new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
    last_name: new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
    company: new FormGroup({
      name: new FormControl('Company', [Validators.required, this.forbiddenName.bind(this)]),
      user_type: new FormControl('Participant', [Validators.required]),
    }),
    user_status: new FormControl('active', [Validators.required]),
    count_document: new FormControl(15, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    date_of_birth: new FormControl(null, [Validators.required]),
  });

  forbiddenName(control: FormControl) {
    if (this.forbidenName.indexOf(control.value) !== -1) {
      return { "forbiden": true };
    }
    return null
  }



  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('userid');
    this.isEdit = id != null;
  }


  onSubmit2() {
    let a = (this.userForm2.get('date_of_birth').value).toLocaleDateString()    // this.userForm2.patchValue({birth_of_date: a})

    console.log(a)
    console.log(this.userForm2.value)
    if (this.userForm2.valid) {
      this.userForm2.controls['date_of_birth'].setValue(a);
      this.mentorService.addData(this.userForm2.value)
      console.log('berhasil');
      Swal.fire(
        'Success to Submit ',
        'Click to close',
        'success'
      ).then(() => {
        this.dialog.close()
      }
      )



    } else {
      console.log('gagal');
      Swal.fire(
        'Failed to Submit ',
        'Click to close',
        'error'
      )

    }


  }


  setLanguage(lang: string) {
    this.translateService.use(lang);
  }



}
