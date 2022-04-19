import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorReadComponent } from './sensor-read.component';

describe('SensorReadComponent', () => {
  let component: SensorReadComponent;
  let fixture: ComponentFixture<SensorReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
