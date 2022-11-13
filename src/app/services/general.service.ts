import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';


interface IBoughtStatus {
  id: any;
  bought: boolean;
  url: string;
  price: string;
  initialAmount: number;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  mostBought: BehaviorSubject<[string,number]> =
  new BehaviorSubject<[string,number]>(['No Item Bought',0]);
  

  public status: IBoughtStatus[] = [
    {
      id: 'Nvidia RTX 4090',
      bought: true,
      url: 'https://www.cnet.com/a/img/resize/8f6fcc005e07a451081bf66e5dba06978abd3b1c/hub/2022/09/20/fbf7fc1e-1b64-413c-993e-b0119c520874/geforce-rtx-4090-product-photo-002.jpg?auto=webp&fit=crop&height=1200&width=1200',
      price: '$1599',
      initialAmount: 5,
      amount: 5
    },
    {
      id: 'Samsung Odyssey G3',
      bought: true,
      url: 'https://images.samsung.com/is/image/samsung/p6pim/ph/ls27ag320nexxp/gallery/ph-odyssey-g3-g32a-ls27ag320nexxp-531627403?$650_519_PNG$',
      price: '$699',
      initialAmount: 3,
      amount: 3
    },
    {
      id: 'Bengoo G9000',
      bought: true,
      url: 'https://m.media-amazon.com/images/I/61CGHv6kmWL.jpg',
      price: '$29.99',
      initialAmount: 6,
      amount:6
    }
  ]
  constructor() { }

  isBought(id: string) {
    return this.status.find(element => element.id === id)?.bought
  }

  toggleCard(id: string) {
    const modal = this.status.find(element => element.id === id)
    if (modal) {
      modal.bought = !modal.bought;
    }
  }

  resetAmount(id: string) {
    const reset = this.status.find(element => element.id === id)
    if (reset) {
      reset.amount = reset.initialAmount;
    }
  }

  buyItem(id: string) {
    const buy = this.status.find(element => element.id === id)
    if (buy) {
      buy.amount = buy.amount - 1;
    }
  }

  checkAmount(id: string) {
    return this.status.find(element => element.id === id)?.amount
  }

  getURL(id: string) {
    return this.status.find(element => element.id === id)?.url
  }

  getPrice(id: string) {
    return this.status.find(element => element.id === id)?.price
  }

  changeImage(id: string, url: string) {
    const change = this.status.find(element => element.id === id)
    if (change) {
      change.url = url;
    }
  }

}

