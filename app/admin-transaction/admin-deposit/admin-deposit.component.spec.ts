import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDepositComponent } from './admin-deposit.component';

describe('AdminDepositComponent', () => {
  let component: AdminDepositComponent;
  let fixture: ComponentFixture<AdminDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDepositComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
