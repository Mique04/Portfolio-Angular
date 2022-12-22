import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertIngreseDatosComponent } from './alert-ingrese-datos.component';

describe('AlertIngreseDatosComponent', () => {
  let component: AlertIngreseDatosComponent;
  let fixture: ComponentFixture<AlertIngreseDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertIngreseDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertIngreseDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
