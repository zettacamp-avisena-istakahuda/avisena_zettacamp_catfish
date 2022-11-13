import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { Router } from '@angular/router';


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
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  tes = 'tes'
  movieData: IMovie[] = []
  constructor(
    public serviceMovie: MovieServiceService,
    public route: Router
  ) {
    this.movieData = this.serviceMovie.movieData
  }

  ngOnInit(): void {
  }

  cardClick(name: string){
    this.route.navigate(['/detailmovie'])
    console.log(name)
  }

}
