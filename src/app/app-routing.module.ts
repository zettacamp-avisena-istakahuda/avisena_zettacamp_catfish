import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockManagementComponent } from './admin/stock-management/stock-management.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { MenuComponent } from './homepage/menu/menu.component';
import { MenuManagementComponent } from './admin/menu-management/menu-management.component';
const routes: Routes = [
  {path : "homepage", component : HomepageComponent},
  {path : "menu", component : MenuComponent},
  {path : "stock-management", component : StockManagementComponent},
  {path : "menu-management", component : MenuManagementComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
