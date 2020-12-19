import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAventuraComponent } from './crear-aventura.component';

describe('CrearAventuraComponent', () => {
  let component: CrearAventuraComponent;
  let fixture: ComponentFixture<CrearAventuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAventuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAventuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
