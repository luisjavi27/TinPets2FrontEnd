import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMascotasComponent } from './tabla-mascotas.component';

describe('TablaMascotasComponent', () => {
  let component: TablaMascotasComponent;
  let fixture: ComponentFixture<TablaMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMascotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
