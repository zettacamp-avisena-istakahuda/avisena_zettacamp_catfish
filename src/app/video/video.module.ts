import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordsComponent } from './words/words.component';
import { TheVideoComponent } from './the-video/the-video.component';



@NgModule({
  declarations: [
    WordsComponent,
    TheVideoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TheVideoComponent,WordsComponent]
})
export class VideoModule { }
