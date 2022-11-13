import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookInfoPageComponent } from './book-info-page/book-info-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'bookInfo/:id',
    component: BookInfoPageComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
  // {
  //   path: '**',
  //   redirectTo: '/not-found'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
