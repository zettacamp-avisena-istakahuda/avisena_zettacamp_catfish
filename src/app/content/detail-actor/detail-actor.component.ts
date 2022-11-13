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
  selector: 'app-detail-actor',
  templateUrl: './detail-actor.component.html',
  styleUrls: ['./detail-actor.component.css']
})
export class DetailActorComponent implements OnInit {
  name = ''
  pictURL = ''
  actorData!: IActor
 
  constructor(public route: ActivatedRoute, public service: MovieServiceService) {
    this.name = this.route.snapshot.params['name']
    this.actorData = this.service.getActorData(this.name)
    this.pictURL = this.actorData.picture
  }
  ngOnInit(): void {
  }

}
