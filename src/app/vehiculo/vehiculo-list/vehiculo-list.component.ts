import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehiculo-list.component.html',
  styleUrl: './vehiculo-list.component.css'
})
export class VehiculoListComponent implements OnInit {
  vehiculos: Array<Vehiculo> = [];

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.getVehiculos();
  }

  getVehiculos() {
    this.vehiculoService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
    });
  }

  getTotalPorMarca(): { [key: string]: number } {
    const totalPorMarca: { [key: string]: number } = {};
    this.vehiculos.forEach(vehiculo => {
      totalPorMarca[vehiculo.marca] = (totalPorMarca[vehiculo.marca] || 0) + 1;
    });
    return totalPorMarca;
  }

  getMarcas(): string[] {
    return Object.keys(this.getTotalPorMarca());
  }
}
