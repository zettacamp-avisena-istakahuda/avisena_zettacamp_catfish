import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit {
  // @ViewChild("emailLogin") emailLogin!: ElementRef;
  // @ViewChild("emailRegister") emailRegister!: ElementRef;
  // @ViewChild("passwordLogin") passwordLogin!: ElementRef;
  // @ViewChild("passwordRegister") passwordRegister!: ElementRef;
  // @ViewChild("name") name!: ElementRef;
  // @ViewChild("age") age!: ElementRef;
  // @ViewChild("phone") phone!: ElementRef;


  public dataModal = []

  constructor(public modal: ModalService) {
    this.modal.register('login/register');
  }

  ngOnInit(): void {
  }

  // ngAfterViewInit(): void {
  //   console.log('AFTER VIEW INIT: ', this.emailRegister.nativeElement.value)
  // }

  // ngAfterViewChecked(): void {
  //   console.log("AFTER VIEW CHECKED CALLED")
  // }

  // ShowData(email: string, password: string, name?: string, age?: string, phone?: string) {
  //   console.log(email);
  //   console.log(password);

  //   if (name) {
  //     console.log(name);
  //     console.log(age);
  //     console.log(phone);
  //   }
  // }

  // ShowData() {

  //   if (this.emailRegister.nativeElement.value) {
  //     console.log("Email: ", this.emailRegister.nativeElement.value);
  //     console.log("Password: ", this.passwordRegister.nativeElement.value);
  //     console.log("Name: ", this.name.nativeElement.value);
  //     console.log("Age: ", this.age.nativeElement.value);
  //     console.log("Phone: ", this.phone.nativeElement.value);
  //   }

  //   else {
  //     console.log("Email: ", this.emailLogin.nativeElement.value);
  //     console.log("Password: ", this.passwordLogin.nativeElement.value);
  //   }

  // }


}
