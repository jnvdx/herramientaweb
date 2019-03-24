/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TiroParabolicoComponent } from './tiro-parabolico.component';

describe('TiroParabolicoComponent', () => {
  let component: TiroParabolicoComponent;
  let fixture: ComponentFixture<TiroParabolicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiroParabolicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiroParabolicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
