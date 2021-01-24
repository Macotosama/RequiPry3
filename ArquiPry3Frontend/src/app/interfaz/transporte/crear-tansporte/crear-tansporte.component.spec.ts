import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTansporteComponent } from './crear-tansporte.component';

describe('CrearTansporteComponent', () => {
  let component: CrearTansporteComponent;
  let fixture: ComponentFixture<CrearTansporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTansporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTansporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
