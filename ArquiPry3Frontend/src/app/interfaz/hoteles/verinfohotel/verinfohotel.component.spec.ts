import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerinfohotelComponent } from './verinfohotel.component';

describe('VerinfohotelComponent', () => {
  let component: VerinfohotelComponent;
  let fixture: ComponentFixture<VerinfohotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerinfohotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerinfohotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
