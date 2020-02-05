import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit {

  firstNumber: number;
  secondNumber: number;

  constructor() { }

  ngOnInit() {
  }

  appendNumber(digit: number) {

  }

}
