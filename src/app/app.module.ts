import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlowMeterComponent } from './flow-meter/flow-meter.component';
import { CardWaterComponent } from './card-water/card-water.component';
import { RawWaterComponent } from './raw-water/raw-water.component';
import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  declarations: [
    AppComponent,
    FlowMeterComponent,
    CardWaterComponent,
    RawWaterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InlineSVGModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
