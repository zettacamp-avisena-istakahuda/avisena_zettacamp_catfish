import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { SubSink } from 'subsink';
import { ApiServiceService } from '../../services/api-service.service';

interface IDataSchools {
  short_name: string
  long_name: string
  status: string
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();
  dataSchools: IDataSchools[] = []
  displayedColumns: string[] = ['short_name', 'long_name', 'status'];
  dataSource = new MatTableDataSource();
  private subsSchools = new SubSink();

  constructor(private apiService: ApiServiceService
    ) {
    
   }

  ngOnInit(): void {

    this.subsSchools.sink = this.apiService.getAllSchools().pipe(takeUntil(this.destroy$)).subscribe(resp => {
      this.dataSource = new MatTableDataSource(resp.data.GetAllSchools)
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
