import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  datas = [
          {"name":"Wellgrow"},
          {"name":"Underground"},
          {"name":"MMF"},
          {"name":"RO DI"},
          {"name":"Protable"}
         ]

  constructor(){
    console.log(this.datas)
  }
}
