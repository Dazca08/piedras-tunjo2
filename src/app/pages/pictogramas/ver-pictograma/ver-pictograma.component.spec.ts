import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPictogramaComponent } from './ver-pictograma.component';

describe('VerPictogramaComponent', () => {
  let component: VerPictogramaComponent;
  let fixture: ComponentFixture<VerPictogramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPictogramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPictogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
