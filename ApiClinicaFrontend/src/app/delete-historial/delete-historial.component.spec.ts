import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHistorialComponent } from './delete-historial.component';

describe('DeleteHistorialComponent', () => {
  let component: DeleteHistorialComponent;
  let fixture: ComponentFixture<DeleteHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHistorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
