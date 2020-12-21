import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerinfohabitacionComponent } from './verinfohabitacion.component';

describe('VerinfohabitacionComponent', () => {
  let component: VerinfohabitacionComponent;
  let fixture: ComponentFixture<VerinfohabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerinfohabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerinfohabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
