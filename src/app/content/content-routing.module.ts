import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ActorsComponent } from './actors/actors.component';
import { DetailActorComponent } from './detail-actor/detail-actor.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { MoviesComponent } from './movies/movies.component';
import { YourAccountComponent } from './your-account/your-account.component';

const routes: Routes = [
  {
    path: 'detail-actor/:name',
    component: DetailActorComponent
  }
  , {
    path: 'detail/:title',
    component: DetailMovieComponent
  }
  , {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'actors',
    component: ActorsComponent,
  },
  {
    path: 'your-account',
    component: YourAccountComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
