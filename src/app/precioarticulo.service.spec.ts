import { TestBed } from '@angular/core/testing';

import { PrecioarticuloService } from './precioarticulo.service';

describe('PrecioarticuloService', () => {
  let service: PrecioarticuloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrecioarticuloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
