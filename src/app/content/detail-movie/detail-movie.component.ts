import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';

interface IMovie {
  title?: string,
  distributor?: string,
  producers?: string[],
  editors?: string[],
  poster?: string,
  yearsReleased?: number,
  actor?: Array<IActor>
}

interface IActor {
  name: string
  picture: string
}

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {
  title = ''
  year!: number | undefined
  distributor!: string | undefined
  pictURL!: string | undefined
  producers!: Array<any> | undefined
  editors!: Array<any> | undefined
  actorsData: Array<IActor> = []
  movieData: IMovie = {}
  constructor(public route: ActivatedRoute, public service: MovieServiceService) {
    this.title = this.route.snapshot.params['title']
    this.movieData = this.service.getMovieDetail(this.title)
    this.actorsData = this.service.getActorsFromMovie(this.title)
    this.year = this.movieData.yearsReleased
    this.pictURL = this.movieData.poster
    this.distributor = this.movieData.distributor
    this.producers = this.movieData.producers
    this.editors = this.movieData.editors

  }

  ngOnInit(): void {
  }

}
