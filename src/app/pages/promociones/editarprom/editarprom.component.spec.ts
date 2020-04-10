import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarpromComponent } from './editarprom.component';

describe('EditarpromComponent', () => {
  let component: EditarpromComponent;
  let fixture: ComponentFixture<EditarpromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarpromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarpromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
