import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatSidenavModule, MatButtonModule, MatListModule,
    MatToolbarModule, MatIconModule, MatTabsModule, MatCardModule,
    MatTableModule, MatFormFieldModule, FormsModule, MatSelectModule, ReactiveFormsModule
  ],
  exports: [MatSidenavModule, MatButtonModule, MatListModule,
    MatToolbarModule, MatIconModule, MatTabsModule, MatCardModule,
    MatTableModule, MatFormFieldModule, FormsModule, MatSelectModule, ReactiveFormsModule]
})
export class SharedModuleModule { }
