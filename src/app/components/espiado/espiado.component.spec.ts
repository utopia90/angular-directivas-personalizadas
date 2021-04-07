import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspiadoComponent } from './espiado.component';

describe('EspiadoComponent', () => {
  let component: EspiadoComponent;
  let fixture: ComponentFixture<EspiadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspiadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspiadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
