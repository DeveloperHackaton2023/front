import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInfoTableComponent } from './main-info-table.component';

describe('MainInfoTableComponent', () => {
  let component: MainInfoTableComponent;
  let fixture: ComponentFixture<MainInfoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainInfoTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
