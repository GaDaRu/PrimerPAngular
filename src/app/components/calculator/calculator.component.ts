import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  value: string = '0'

  constructor() {
  }

  calculate(percentage: boolean) {
    if (percentage) {
      let data = this.value.split(/[+\-*\/]/)
      this.value = this.value.replace(/[+\-*\/].*/, function(match) {
        let percentageCalculate = (Number(data[1]) / 100) * Number(data[0])
        return match[0] + percentageCalculate.toString()
      })

      try {
        //this.value = eval(this.value)
      } catch (e) {
        console.log(e)
      }
    }
    else {
      try {
        //this.value = eval(this.value)
      } catch (e) {
        console.log(e)
      }
    }
  }

  addValue(value: any) {
    if (this.value === '0') {
      this.value = value.toString()
    } else {
      this.value = this.value + value.toString()
    }

  }

  cleanValue() {
    this.value = '0'
  }

  deleteLastValue() {
    if (this.value.length <= 1)
      this.value = '0'
    else
      this.value = this.value.slice(0, -1)
  }
}
