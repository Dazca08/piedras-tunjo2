import { TestBed } from '@angular/core/testing';

import { ServiciomapaService } from './serviciomapa.service';

describe('ServiciomapaService', () => {
  let service: ServiciomapaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciomapaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
