import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CardsContainerComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports:[CardsContainerComponent]
})
export class ContainerModule { }
