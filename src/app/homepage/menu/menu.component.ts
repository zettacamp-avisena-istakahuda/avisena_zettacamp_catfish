import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { LoginFormComponent } from 'src/app/login/login-form/login-form.component';
import { MatDialog } from '@angular/material/dialog';

interface IMenu {
  available: number
  recipe_name: string
  img: string
  price: number
  description: string
  ingredients: Array<any>
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private subsPromo = new SubSink();
  dataMenu: IMenu[] = []
  ingredients: Array<string> = []
  constructor(private service: ApiServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.subsPromo.sink = this.service.getActiveMenu().valueChanges.subscribe((resp: any) => {
      this.dataMenu = resp.data.getActiveMenu.data
      console.log(resp.data.getActiveMenu.data)
      this.ingredients = this.service.extractIngredients(this.dataMenu)
    })

    this.service.getActiveMenu().refetch()

  }

  onAddCart() {
    let login = localStorage.getItem('token')
    if (login) {
         
    }
    else {
      this.openDialog()
    }
  }

  openDialog(): void {
    this.dialog.open(LoginFormComponent, {
      width: '250px',
      panelClass: 'custom-modalbox',
    });
  }

}




