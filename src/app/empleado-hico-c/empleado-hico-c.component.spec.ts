import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoHicoCComponent } from './empleado-hico-c.component';

describe('EmpleadoHicoCComponent', () => {
  let component: EmpleadoHicoCComponent;
  let fixture: ComponentFixture<EmpleadoHicoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoHicoCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoHicoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
