import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    VehiculoListComponent
  ],
  exports: [
    VehiculoListComponent
  ]
})
export class VehiculoModule { }
