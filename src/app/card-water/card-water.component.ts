import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-water',
  templateUrl: './card-water.component.html',
  styleUrls: ['./card-water.component.scss']
})
export class CardWaterComponent implements OnInit {
  @Input('name') name
  constructor() { }

  ngOnInit() {
  }

}
