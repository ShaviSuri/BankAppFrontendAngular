import { TestBed } from '@angular/core/testing';

import { AdmintransactionService } from './admintransaction.service';

describe('AdmintransactionService', () => {
  let service: AdmintransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmintransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
