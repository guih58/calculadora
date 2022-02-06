import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components/calculadora.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalculadoraComponent],
  exports: [CalculadoraComponent]
})
export class CalculadoraModule { }
