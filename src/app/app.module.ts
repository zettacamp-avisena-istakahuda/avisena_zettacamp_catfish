import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookManagementModule } from './book-management/book-management.module';
import { BookInfoPageComponent } from './book-info-page/book-info-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BookInfoPageComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BookManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
