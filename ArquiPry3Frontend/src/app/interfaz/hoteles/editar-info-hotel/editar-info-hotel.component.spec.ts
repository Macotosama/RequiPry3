import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInfoHotelComponent } from './editar-info-hotel.component';

describe('EditarInfoHotelComponent', () => {
  let component: EditarInfoHotelComponent;
  let fixture: ComponentFixture<EditarInfoHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInfoHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInfoHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
