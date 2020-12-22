import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerinforeservacionComponent } from './verinforeservacion.component';

describe('VerinforeservacionComponent', () => {
  let component: VerinforeservacionComponent;
  let fixture: ComponentFixture<VerinforeservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerinforeservacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerinforeservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
