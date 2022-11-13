import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-list/user-card/user-card.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { SharedModuleModule } from '../shared/shared-module/shared-module.module';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { CremePipe } from './creme.pipe';





@NgModule({
  declarations: [
    UserListComponent,
    UserCardComponent,
    UserFormComponent,
    UserManagementComponent,
    FilterPipe,
    CremePipe
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule, SharedModuleModule,
    AngularMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    UserListComponent,
    UserCardComponent,
    UserFormComponent,
    UserManagementComponent
  ]
})
export class UserManagementModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../../assets/i18n/', '.json');
}