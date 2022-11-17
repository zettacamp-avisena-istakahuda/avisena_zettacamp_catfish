import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatIconModule, MatToolbarModule, MatDialogModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule,
    ReactiveFormsModule, RouterModule, MatTableModule, BrowserAnimationsModule, BrowserModule, MatSelectModule
  ],
  exports: [MatIconModule, MatToolbarModule, MatDialogModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule,
    ReactiveFormsModule, RouterModule, MatTableModule, BrowserAnimationsModule, BrowserModule, MatSelectModule]
})
export class SharedModuleModule { }
