import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInfoAventuraComponent } from './editar-info-aventura.component';

describe('EditarInfoAventuraComponent', () => {
  let component: EditarInfoAventuraComponent;
  let fixture: ComponentFixture<EditarInfoAventuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInfoAventuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInfoAventuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
