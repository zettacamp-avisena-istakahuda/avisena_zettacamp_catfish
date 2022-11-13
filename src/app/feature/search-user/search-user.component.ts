import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FormControl } from '@angular/forms';
import { SubSink } from 'subsink';
import { ApiServiceService } from '../../services/api-service.service';

interface IUser {
  first_name: string
  last_name: string
  sex: string
  office_phone: string
}

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  dataUser: IUser[] = []
  searchName = new FormControl()
  checkLength = false

  private subsSearch = new SubSink();

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.searchName.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((search) => {

      if (search.length > 3) {
        this.checkLength = false
        this.subsSearch.sink = this.apiService.getUserByName(search).pipe(takeUntil(this.destroy$)).subscribe(resp => {
          this.dataUser = resp.data.GetAllUsers
        })

        // this.subsPromo.sink = this.apiService.getAllPromos().valueChanges.subscribe((resp: any) => {
        //   this.dataPromo = resp.data.GetAllPromos
        // })

      }

      else {
        this.checkLength = true
        this.dataUser = []
      }
    });
  }

  trackByUserCode(index: number, user: any) {
    return user.code;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }


}


