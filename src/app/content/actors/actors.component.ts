import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
interface IMovie {
  title: string,
  poster: string,
  yearsReleased: number,
  actor: Array<IActor>
}
interface IActor {
  name: string
  picture: string
}
interface IActor2 {
  name: string
  picture: string
  movie: string
}
@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  movieData: IMovie[] = []
  actorData: IActor2[] = []
  constructor(
    public serviceMovie: MovieServiceService
  ) {
   
  }

  ngOnInit(): void {
    this.movieData = []
    this.actorData = []
    this.actorData = this.serviceMovie.getAllActors()
  }

}
