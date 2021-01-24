import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTransporteComponent } from './info-transporte.component';

describe('InfoTransporteComponent', () => {
  let component: InfoTransporteComponent;
  let fixture: ComponentFixture<InfoTransporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoTransporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
