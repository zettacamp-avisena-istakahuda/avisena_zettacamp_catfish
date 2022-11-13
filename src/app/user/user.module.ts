import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { PopUpModule } from '../pop-up/pop-up.module';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AuthModalComponent
  ],
  imports: [
    CommonModule, PopUpModule, MatInputModule, MatProgressBarModule, MatIconModule, MatButtonModule
  ],
  exports: [AuthModalComponent]
})
export class UserModule { }
