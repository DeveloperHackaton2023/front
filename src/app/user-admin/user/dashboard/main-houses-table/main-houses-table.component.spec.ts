import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHousesTableComponent } from './main-houses-table.component';

describe('MainHousesTableComponent', () => {
  let component: MainHousesTableComponent;
  let fixture: ComponentFixture<MainHousesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHousesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHousesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
