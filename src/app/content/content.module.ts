import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { ActorsComponent } from './actors/actors.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { DetailActorComponent } from './detail-actor/detail-actor.component';
import { ContentRoutingModule } from './content-routing.module';
import { AuthGuard } from '../auth.guard';
import { YourAccountComponent } from './your-account/your-account.component';



@NgModule({
  declarations: [MoviesComponent, ActorsComponent, DetailMovieComponent, DetailActorComponent, YourAccountComponent],
  imports: [
    CommonModule, MatCardModule, MatTabsModule, ContentRoutingModule

  ],
  providers:[AuthGuard],
  exports: [MoviesComponent, ActorsComponent, DetailMovieComponent]
})
export class ContentModule {

}
