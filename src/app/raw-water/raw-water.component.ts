import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-raw-water',
  templateUrl: './raw-water.component.html',
  styleUrls: ['./raw-water.component.scss']
})
export class RawWaterComponent implements OnInit {
@Input('name') name
  constructor() { }

  ngOnInit() {
  }

}
