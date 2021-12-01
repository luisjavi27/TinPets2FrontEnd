import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaMascotaComponent } from './ficha-mascota.component';

describe('FichaMascotaComponent', () => {
  let component: FichaMascotaComponent;
  let fixture: ComponentFixture<FichaMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaMascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
