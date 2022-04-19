import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorDeleteComponent } from './sensor-delete.component';

describe('SensorDeleteComponent', () => {
  let component: SensorDeleteComponent;
  let fixture: ComponentFixture<SensorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
