import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { SubSink } from 'subsink';
import { ApiServiceService } from '../../services/api-service.service';
import Swal from 'sweetalert2'

interface IUser {
  first_name: string
  last_name: string
  sex: string
  office_phone: string
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  loadingDetect: any = ['j']
  dataUser: IUser[] = []
  createPromoForm: any = new FormGroup({
    ref: new FormControl(null, Validators.required),
    title: new FormControl(null, [Validators.required]),
    sub_title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    image_url: new FormControl(null, [Validators.required]),
  });
  private subsCreate = new SubSink();


  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loadingDetect = null
    this.subsCreate.sink = this.apiService.createPromo(this.createPromoForm?.value).subscribe(resp => {
      this.loadingDetect = resp
      if (this.loadingDetect) {
        Swal.fire({
          icon: 'success',
          title: 'Promo Submitted!',
        })
       
      }
    })
    this.createPromoForm.reset()
    this.apiService.getAllPromos().refetch()
  }
}
