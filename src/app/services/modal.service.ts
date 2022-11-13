import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';


interface IModal {
  id: string;
  visible: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = []
  public dataSubject = new Subject<string>();
  
  constructor() { }

  subjectTest(data: any){
    this.dataSubject.next(data);
  }

  register(id: string){
    this.modals.push({
      id, visible: false
    })
  }

  isModalOpen(id: string){
    return this.modals.find(element => element.id ===id)?.visible
  }

  toggleModal(id:  string){
    const modal = this.modals.find(element => element.id ===id)
    if(modal){
    modal.visible = !modal.visible;
    }
  }

  // getTest(): Observable<IModal[]>{
  //   return this.modals<IModal[]>;
  // }

}
