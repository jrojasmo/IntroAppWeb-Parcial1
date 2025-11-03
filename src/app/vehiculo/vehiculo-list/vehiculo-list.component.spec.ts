import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VehiculoListComponent } from './vehiculo-list.component';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculoListComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render three rows in the table body when there are three vehicles', () => {

    component.vehiculos = [
      { id: 1, marca: 'pollito', linea: 'test', referencia: 'X', modelo: 2015, kilometraje: 50000, color: 'Rojo', imagen: '' },
      { id: 2, marca: 'test', linea: 'prueba', referencia: 'Y', modelo: 2018, kilometraje: 30000, color: 'Azul', imagen: '' },
      { id: 3, marca: 'hola', linea: 'adios', referencia: 'Z', modelo: 2016, kilometraje: 40000, color: 'Blanco', imagen: '' }
    ];

    fixture.detectChanges();

    const compiled: HTMLElement = fixture.nativeElement;
    const bodyRows = compiled.querySelectorAll('table tbody tr');
    expect(bodyRows.length).toBe(3);
  });
});
