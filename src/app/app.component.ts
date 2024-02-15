import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CalculatorComponent} from "./components/calculator/calculator.component";
import {ChuckService} from "./services/chuck.service";
import {JokeComponent} from "./components/joke/joke.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculatorComponent, JokeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
  }
}
