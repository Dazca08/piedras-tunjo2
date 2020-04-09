import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarpromComponent } from './agregarprom.component';

describe('AgregarpromComponent', () => {
  let component: AgregarpromComponent;
  let fixture: ComponentFixture<AgregarpromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarpromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarpromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
