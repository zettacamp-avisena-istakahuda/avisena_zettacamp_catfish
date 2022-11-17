import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SubSink } from 'subsink';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-ingredient-edit-form',
  templateUrl: './ingredient-edit-form.component.html',
  styleUrls: ['./ingredient-edit-form.component.css']
})
export class IngredientEditFormComponent implements OnInit {
  name = new FormControl('');
  stock = new FormControl('');
  private subsForm = new SubSink();

  constructor(private service: ApiServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.name.setValue(this.data.name)
    this.stock.setValue(this.data.stock)
  }
   
  onSubmit(){
     if(this.data.action == 'add'){
      this.subsForm.sink = this.service.addIngredient(this.name.value, this.stock.value).subscribe(resp => {
      })
     }
     
     else if(this.data.action == 'edit'){
      this.subsForm.sink = this.service.updateIngredient(this.data.id, this.name.value ,this.stock.value).subscribe(resp => {
      })
     }
     this.service.getAllIngredients().refetch()
     
  }

  onDelete(){
    console.log(this.data.id)
    this.subsForm.sink = this.service.deleteIngredient(this.data.id).subscribe(resp => {
      console.log(resp)
    })
    this.service.getAllIngredients().refetch()

  }

}
