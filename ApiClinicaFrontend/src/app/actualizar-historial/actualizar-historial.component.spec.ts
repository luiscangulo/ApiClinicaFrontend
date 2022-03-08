import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarHistorialComponent } from './actualizar-historial.component';

describe('ActualizarHistorialComponent', () => {
  let component: ActualizarHistorialComponent;
  let fixture: ComponentFixture<ActualizarHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarHistorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
