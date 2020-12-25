import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFundTransferComponent } from './admin-fund-transfer.component';

describe('AdminFundTransferComponent', () => {
  let component: AdminFundTransferComponent;
  let fixture: ComponentFixture<AdminFundTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFundTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFundTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
