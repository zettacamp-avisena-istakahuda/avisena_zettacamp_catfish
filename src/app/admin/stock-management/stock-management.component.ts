import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SubSink } from 'subsink';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { MatDialog } from '@angular/material/dialog';
import { IngredientEditFormComponent } from '../ingredient-edit-form/ingredient-edit-form.component';


interface IDataTable {
  id: string
  name: string
  status: string | number
  stock: number
}

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.css']
})
export class StockManagementComponent implements OnInit {
  private subsIngredients = new SubSink();
  dataIngredients: IDataTable[] = []
  dataSource = new MatTableDataSource(this.dataIngredients)
  displayedColumns: string[] = ['name', 'status', 'stock', 'operation'];


  constructor(private service: ApiServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.subsIngredients.sink = this.service.getAllIngredients().valueChanges.subscribe((resp: any) => {
      this.dataIngredients = resp.data.getAllIngredient.data
      this.dataSource = new MatTableDataSource(this.dataIngredients)
      console.log(resp.data.getAllIngredient.data)
    })
  }

  openDialog(action: string, name?: string, stock?: number, id?: any): void {
    this.dialog.open(IngredientEditFormComponent, {
      width: '250px',
      data: {
        action: action,
        id: id,
        name: name,
        stock: stock
      }
    });
  }

}
