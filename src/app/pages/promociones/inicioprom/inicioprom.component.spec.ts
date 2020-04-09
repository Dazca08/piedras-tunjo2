import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciopromComponent } from './inicioprom.component';

describe('IniciopromComponent', () => {
  let component: IniciopromComponent;
  let fixture: ComponentFixture<IniciopromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciopromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciopromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
