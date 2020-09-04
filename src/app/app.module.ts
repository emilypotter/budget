import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgStreamingModule} from '@videogular/ngx-videogular/streaming';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
