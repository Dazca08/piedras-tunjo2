import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPicComponent } from './agregar-pic.component';

describe('AgregarPicComponent', () => {
  let component: AgregarPicComponent;
  let fixture: ComponentFixture<AgregarPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
