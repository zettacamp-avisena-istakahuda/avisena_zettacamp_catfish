import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockManagementComponent } from './admin/stock-management/stock-management.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { MenuComponent } from './homepage/menu/menu.component';
import { MenuManagementComponent } from './admin/menu-management/menu-management.component';
import { CartPageComponent } from './homepage/cart-page/cart-page.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { TransactionHistoryComponent } from './homepage/transaction-history/transaction-history.component';
import { GeneralGuardGuard } from './general-guard.guard';

const routes: Routes = [
  {path : "homepage", component : HomepageComponent},
  {path : "menu", component : MenuComponent},
  {path : "stock-management", component : StockManagementComponent, canActivate: [AdminGuardGuard]},
  {path : "menu-management", component : MenuManagementComponent, canActivate: [AdminGuardGuard]},
  {path : "cart-page", component : CartPageComponent, canActivate: [GeneralGuardGuard]},
  {path : "transaction-history", component : TransactionHistoryComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
