import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLockerComponent } from './details-locker.component';

describe('DetailsLockerComponent', () => {
  let component: DetailsLockerComponent;
  let fixture: ComponentFixture<DetailsLockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsLockerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsLockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
