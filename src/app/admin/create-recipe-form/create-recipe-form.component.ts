import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms'
import { ApiServiceService } from 'src/app/services/api-service.service';
import { SubSink } from 'subsink';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import copy from 'fast-copy';

@Component({
  selector: 'app-create-recipe-form',
  templateUrl: './create-recipe-form.component.html',
  styleUrls: ['./create-recipe-form.component.css']
})
export class CreateRecipeFormComponent implements OnInit {
  createRecipe: any
  selectedRecipeID!:string
  private subsIngredients = new SubSink();
  dataIngredients: any = []
  constructor(
    private service: ApiServiceService,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
   }

  ngOnInit(): void {
    this.subsIngredients.sink = this.service.getAllIngredients().valueChanges.subscribe((resp: any) => {
      this.dataIngredients = resp.data.getAllIngredient.data
    })

    this.createRecipe = new FormGroup({
      'recipe_name': new FormControl(null),
      'description': new FormControl(null),
      'img': new FormControl(null),
      'price': new FormControl(null),
      input: this.fb.array([]),
    })
    if (this.data.action === 'edit') {
      let i = 0
      this.selectedRecipeID= this.data.selectedCard.id
      this.data.selectedCard = copy(this.data.selectedCard)
      this.data.selectedCard.input = this.data.selectedCard.ingredients
       delete this.data.selectedCard.ingredients;
       delete this.data.selectedCard.id;
       delete this.data.selectedCard.status;
       delete this.data.selectedCard.available;
       delete this.data.selectedCard.__typename;

      for (let a of this.data.selectedCard.input) {
        this.data.selectedCard.input[i].ingredient_id =  this.data.selectedCard.input[i].ingredient_id.id;
        delete this.data.selectedCard.input[i].__typename;
        this.addInput()
        i++;
      }
      console.log(this.data.selectedCard)
      this.createRecipe.setValue(this.data.selectedCard)
    }
    else {
      this.addInput()
    }
  }

  get input(): FormArray {
    return this.createRecipe.get("input") as FormArray
  }


  newInput(): FormGroup {
    return this.fb.group({
      ingredient_id: [null],
      stock_used: [null],
    })
  }

  addInput() {
    this.input.push(this.newInput());
  }

  removeInput(i: number) {
    this.input.removeAt(i);
  }

  onSubmit() {

    if(this.data.action=='edit'){
      this.subsIngredients.sink = this.service.updateRecipe(this.createRecipe.value, this.selectedRecipeID).subscribe(resp => {
        console.log(this.createRecipe.value)
      })
    }
    else{
      this.subsIngredients.sink = this.service.createRecipe(this.createRecipe.value).subscribe(resp => {
        console.log(resp)
      })
    }
  
    this.service.getAllRecipes().refetch()
  }

  // getData() {
  //   let data: any = {}
  //   data = this.userData.getData(id);
  //   for (let a of data.addresses) {
  //     this.addAddresses();
  //   }


  //   this.action = 'EDIT'
  //   this.action2 = 'Edit'
  // }

}
