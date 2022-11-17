import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockManagementComponent } from './stock-management/stock-management.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { IngredientEditFormComponent } from './ingredient-edit-form/ingredient-edit-form.component';
import { NavbarModule } from '../navbar/navbar.module';
import { CreateRecipeFormComponent } from './create-recipe-form/create-recipe-form.component';
import { MenuManagementComponent } from './menu-management/menu-management.component';
@NgModule({
  declarations: [
    StockManagementComponent,
    IngredientEditFormComponent,
    CreateRecipeFormComponent,
    MenuManagementComponent
  ],
  imports: [
    CommonModule, SharedModuleModule, NavbarModule
  ],
  exports: [StockManagementComponent]
})
export class AdminModule { }
