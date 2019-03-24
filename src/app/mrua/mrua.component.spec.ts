/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MruaComponent } from './mrua.component';

describe('MruaComponent', () => {
  let component: MruaComponent;
  let fixture: ComponentFixture<MruaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MruaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MruaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
