import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateRecipeFormComponent } from '../create-recipe-form/create-recipe-form.component';
import copy from 'fast-copy';


interface IMenu {
  available: number
  recipe_name: string
  img: string
  price: number
  description: string
  status: string
  ingredients: Array<any>
}


@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.css']
})
export class MenuManagementComponent implements OnInit {
  private subsMenu = new SubSink();
  private subsMenuUpdate = new SubSink();

  dataMenu: IMenu[] = []
  ingredients: Array<string> = []

  constructor(private service: ApiServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.subsMenu.sink = this.service.getAllRecipes().valueChanges.subscribe((resp: any) => {
      this.dataMenu = resp.data.getAllRecipes.data
      this.ingredients = this.service.extractIngredients(this.dataMenu)
    })

    this.service.getAllRecipes().refetch()
  }

  openDialog(): void {
    this.dialog.open(CreateRecipeFormComponent, {
      width: '250px',
      data: {
        action: 'submit'
      }

    });
  }

  openDialogEdit(selectedCard: any, action: string): void {
    this.dialog.open(CreateRecipeFormComponent, {
      width: '250px',
      data: {
        selectedCard: selectedCard,
        action: action
      }

    });
  }

  editStatus(data: any) {
    data = copy(data)
    if (data.status === 'active') {
      data.status = 'unpublished'
    }
    else if (data.status === 'unpublished') {
      data.status = 'active'
    }
    else {
      data.status = 'unpublished'
    }
    this.subsMenuUpdate.sink = this.service.updateRecipeStatus(data).subscribe(resp => {
    })
    this.service.getAllRecipes().refetch()
  }

  deleteRecipe(data: any) {
    let i = 0
    data = copy(data)
    data.status = 'deleted'
    this.subsMenuUpdate.sink = this.service.updateRecipeStatus(data).subscribe(resp => {
    })
    this.service.getAllRecipes().refetch()
  }

}

