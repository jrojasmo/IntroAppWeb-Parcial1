import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehiculoListComponent } from './vehiculo/vehiculo-list/vehiculo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VehiculoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carro-segundazo';
}
