import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerinfoaventuraComponent } from './verinfoaventura.component';

describe('VerinfoaventuraComponent', () => {
  let component: VerinfoaventuraComponent;
  let fixture: ComponentFixture<VerinfoaventuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerinfoaventuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerinfoaventuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
