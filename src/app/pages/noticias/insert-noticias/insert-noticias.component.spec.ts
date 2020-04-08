import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertNoticiasComponent } from './insert-noticias.component';

describe('InsertNoticiasComponent', () => {
  let component: InsertNoticiasComponent;
  let fixture: ComponentFixture<InsertNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
