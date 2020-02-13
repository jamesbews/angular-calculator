import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit {

  expression = '';
  result = '';
  error = '';

  constructor() { }

  ngOnInit() {
  }

  appendCharacter(char: string) {
    if (this.error) {
      this.error = '';
    }
    if (this.result && this.isNumber(char)) {
      this.expression = '';
      this.result = '';
      this.expression = this.expression + char;
    } else if (this.result && !this.isNumber(char)) {
      this.expression = this.result;
      this.result = '';
      this.expression = this.expression + char;
    } else if (!this.expression && !this.isNumber(char) && char !== '(' && char !== ')') {
      this.expression = '0' + this.expression + char;
    } else {
      this.expression = this.expression + char;
    }

  }

  clearAll() {
    this.expression = '';
    this.result = '';
    this.error = '';
  }

  clearEntry() {
    if (this.result) {
      this.clearAll();
    } else {
      this.expression = this.expression.slice(0, -1);
    }
  }

  equals() {
    try {
      // tslint:disable-next-line
      this.result = eval(this.expression);
      if (!this.result) {
        this.result = '0';
      }
      this.expression = this.expression + '=';
    } catch (e) {
      this.error = e.toString();
    }
  }

  private isNumber(char: string) {
    return !isNaN(parseInt(char, 10));
  }
}
