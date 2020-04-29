import { TestBed } from '@angular/core/testing';

import { VentaTicketsServiceService } from './venta-tickets-service.service';

describe('VentaTicketsServiceService', () => {
  let service: VentaTicketsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaTicketsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
