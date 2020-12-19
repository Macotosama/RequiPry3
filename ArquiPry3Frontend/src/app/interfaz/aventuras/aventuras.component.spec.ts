import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AventurasComponent } from './aventuras.component';

describe('AventurasComponent', () => {
  let component: AventurasComponent;
  let fixture: ComponentFixture<AventurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AventurasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AventurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
