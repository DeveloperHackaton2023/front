import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPricesTableComponent } from './main-prices-table.component';

describe('MainPricesTableComponent', () => {
  let component: MainPricesTableComponent;
  let fixture: ComponentFixture<MainPricesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPricesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPricesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
