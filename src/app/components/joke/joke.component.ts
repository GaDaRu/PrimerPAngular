import {Component, OnInit} from '@angular/core';
import {ChuckService} from "../../services/chuck.service";
import {FormsModule} from "@angular/forms";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {faQuestion, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [
    FormsModule,
    MatSlideToggle,
    FaIconComponent
  ],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent implements OnInit{
  valueInput: string = ''
  joke: string = ''
  categories: string[] = []

  faShe = faSearch;
  faQue = faQuestion

  constructor(
    private chuckService: ChuckService
  ) {
  }

  ngOnInit(): void {
    this.chuckService.getCategory().subscribe(data => {
      this.categories = data
      console.log(data)
    })
  }

  search() {
    if (this.categories.includes(this.valueInput)) {
      this.getJakeCategory(this.valueInput)
    } else {
      this.getSearchQuery(this.valueInput)
    }
  }

  getRandomJoke() {
    this.chuckService.getRandomJokeChuck().subscribe(data => {
      this.joke = data?.value
    })
  }

  getJakeCategory(category: string) {
    this.chuckService.getRandomCategory(category).subscribe(data => {
      this.joke = data?.value
    })
  }

  getSearchQuery(query: string) {
    this.chuckService.getJakeSearch(query).subscribe(data => {
      console.log(data)
      this.joke = data?.value
    })
  }
}
