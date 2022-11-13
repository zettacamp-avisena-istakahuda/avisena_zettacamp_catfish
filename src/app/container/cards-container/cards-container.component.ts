import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardsContainerComponent implements OnInit {
  constructor(
    public dataService: GeneralService

  ) { }

  data = this.dataService.status


  ngOnInit(): void {

  }


  getMostBoughtID() {
    let a
    this.dataService.mostBought.subscribe(
      (value) => {
        a = value[0];
      }
    );
    return a;
  }

  getMostBoughtAmount(){
    let a
    this.dataService.mostBought.subscribe(
      (value) => {
        a = value[1];
      }
    );
    return a;
  }

  logCardClick(event: any) {
    this.dataService.buyItem(event);


    var arr = Math.max(...this.data.map(o => o.initialAmount - o.amount));
    let bought = this.data.find(element => element.initialAmount-element.amount == arr)?.id
    this.dataService.mostBought.next([bought, arr]);  
  }

  logCardRefreshed(event: any) {

    if (this.dataService.checkAmount(event) == 0) { this.dataService.resetAmount(event) }

  }


  changeImage(name: KeyboardEvent, id: string) {
    let changeURL = (name.target as HTMLInputElement).value;
    this.dataService.changeImage(id, changeURL);
  }

}
