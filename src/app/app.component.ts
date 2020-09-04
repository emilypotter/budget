import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public currentStream = "https://cams.cdn-surfline.com/cdn-wc/hi-pipeline/playlist.m3u8"

  title = 'Emilys-Budget-App';
}
