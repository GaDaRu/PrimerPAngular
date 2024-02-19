import { Component } from '@angular/core';
import {CalculatorComponent} from "../../components/calculator/calculator.component";
import {JokeComponent} from "../../components/joke/joke.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        CalculatorComponent,
        JokeComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
