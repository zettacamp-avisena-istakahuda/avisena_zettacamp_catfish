import { NgModule } from '@angular/core';
import {Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContainerModule } from './container/container.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { VideoModule } from './video/video.module';
import { UserModule } from './user/user.module';
import { FooterComponent } from './footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule, ContainerModule, VideoModule, UserModule, MatInputModule, MatProgressBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
