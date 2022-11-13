import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cardID = '';
  @Output() cardSelected = new EventEmitter<string>()
  @Output() cardRefreshed = new EventEmitter<string>()

  constructor(
    public dataService: GeneralService
  ) {
  }
  data = this.dataService.status

  ngOnInit(): void {
  }

  toggleCard(id: string)
  {
    this.dataService.toggleCard(id);
  }

  isCardActive(id: string){
    let check = this.dataService.isBought(id);
    return check;
  }

  getURL(id: string){
    let url = this.dataService.getURL(id);
    return url;
  }
  
  getPrice(id: string){
    let price = this.dataService.getPrice(id);
    return price;
  }


  checkAmount(id: string){
    let check = this.dataService.checkAmount(id);
    return check;
  }

}
