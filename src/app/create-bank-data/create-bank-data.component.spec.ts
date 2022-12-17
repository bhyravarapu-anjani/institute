import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBankDataComponent } from './create-bank-data.component';

describe('CreateBankDataComponent', () => {
  let component: CreateBankDataComponent;
  let fixture: ComponentFixture<CreateBankDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBankDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBankDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
