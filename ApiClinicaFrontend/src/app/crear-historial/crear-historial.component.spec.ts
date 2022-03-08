import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHistorialComponent } from './crear-historial.component';

describe('CrearHistorialComponent', () => {
  let component: CrearHistorialComponent;
  let fixture: ComponentFixture<CrearHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearHistorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
