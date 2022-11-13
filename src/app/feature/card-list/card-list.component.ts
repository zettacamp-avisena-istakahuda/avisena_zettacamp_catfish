import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SubSink } from 'subsink';
import { ApiServiceService } from '../../services/api-service.service';

interface IDataPromo {
  title: string,
  sub_title: string,
  ref: string,
  image_url: string,
  description: string
}

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  dataPromo: IDataPromo[] = []
  private subsPromo = new SubSink();



  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.subsPromo.sink = this.apiService.getAllPromos().valueChanges.pipe(takeUntil(this.destroy$)).subscribe((resp: any) => {
      this.dataPromo = resp.data.GetAllPromos
      console.log(this.dataPromo.reverse())

    })
  }

  trackByUserCode(index: number, user: any) {
    return user.code;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
    this.subsPromo.unsubscribe();
  }

}
