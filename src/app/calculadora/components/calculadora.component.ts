import { Component, OnInit } from '@angular/core';
import {CalculadoraService } from '../service/calculadora.service'

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  /**
   * private significa que so podemos acessar o atributo na classe definida
   */

  private numero1: string =''
  private numero2: string =''
  private resultado: number =0
  private operacao: string =''
  
  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
  }

}
