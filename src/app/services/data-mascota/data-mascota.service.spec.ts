import { TestBed } from '@angular/core/testing';

import { DataMascotaService } from './data-mascota.service';

describe('DataMascotaService', () => {
  let service: DataMascotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMascotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
