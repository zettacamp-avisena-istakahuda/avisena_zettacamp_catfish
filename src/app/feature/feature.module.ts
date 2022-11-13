import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { CardListComponent } from './card-list/card-list.component';
import { FormComponent } from './form/form.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchUserComponent } from './search-user/search-user.component';


@NgModule({
  declarations: [TableComponent, CardListComponent, FormComponent, SearchUserComponent],
  imports: [
    CommonModule, MatTableModule, MatCardModule, MatInputModule, MatFormFieldModule, FormsModule,
    ReactiveFormsModule, MatProgressSpinnerModule, MatButtonModule
  ],
  exports: [TableComponent, CardListComponent, FormComponent, SearchUserComponent]
})
export class FeatureModule { }
