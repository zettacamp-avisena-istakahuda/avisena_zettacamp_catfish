import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { NavbarModule } from '../navbar/navbar.module';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    HomepageComponent,
    MenuComponent
  ],
  imports: [
    CommonModule, SharedModuleModule, NavbarModule
  ],
  exports: [HomepageComponent, MenuComponent]
})
export class HomepageModule { }
