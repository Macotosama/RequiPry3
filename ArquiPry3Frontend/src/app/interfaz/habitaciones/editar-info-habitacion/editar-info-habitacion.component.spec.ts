import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInfoHabitacionComponent } from './editar-info-habitacion.component';

describe('EditarInfoHabitacionComponent', () => {
  let component: EditarInfoHabitacionComponent;
  let fixture: ComponentFixture<EditarInfoHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInfoHabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInfoHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
