/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RawWaterComponent } from './raw-water.component';

describe('RawWaterComponent', () => {
  let component: RawWaterComponent;
  let fixture: ComponentFixture<RawWaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawWaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
