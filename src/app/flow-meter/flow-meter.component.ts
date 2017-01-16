import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-flow-meter',
  templateUrl: './flow-meter.component.html',
  styleUrls: ['./flow-meter.component.scss']
})
export class FlowMeterComponent implements OnInit {

  @Input('name') name:string
  constructor() { }

  ngOnInit() {
  }

}
