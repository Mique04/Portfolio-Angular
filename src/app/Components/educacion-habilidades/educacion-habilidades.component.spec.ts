import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionHabilidadesComponent } from './educacion-habilidades.component';

describe('EducacionHabilidadesComponent', () => {
  let component: EducacionHabilidadesComponent;
  let fixture: ComponentFixture<EducacionHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionHabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
