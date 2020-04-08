import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPicComponent } from './editar-pic.component';

describe('EditarPicComponent', () => {
  let component: EditarPicComponent;
  let fixture: ComponentFixture<EditarPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
