import {Component, OnInit} from '@angular/core';
import {ChuckService} from "../../services/chuck.service";
import {FormsModule} from "@angular/forms";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {faQuestion, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {LocalStorageService} from "../../services/local-storage.service";
import {enviroment} from "../../../environments/enviroment";

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

  listJoke: string[] = []

  faShe = faSearch;
  faQue = faQuestion

  constructor(
    private chuckService: ChuckService,
    public localStorage: LocalStorageService
  ) {
  }

  ngOnInit(): void {
    this.chuckService.getCategory().subscribe(data => {
      this.categories = data
      console.log(data)
    })

    console.log(this.localStorage.getArrayLocalStorage(enviroment.KEY_JOKE))
    this.listJoke = this.localStorage.getArrayLocalStorage(enviroment.KEY_JOKE) ?? []
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
      this.saveJoke()
    })
  }

  getJakeCategory(category: string) {
    this.chuckService.getRandomCategory(category).subscribe(data => {
      this.joke = data?.value
      this.saveJoke()
    })
  }

  getSearchQuery(query: string) {
    this.chuckService.getJakeSearch(query).subscribe(data => {
      console.log(data)
      if (data.total > 0) {
        this.joke = data?.result[0].value
        this.saveJoke()
      } else {
        this.joke = 'No se han encontrado coincidencias'
      }
    })
  }

  saveJoke() {
    this.listJoke.push(this.joke)
    this.localStorage.saveArray(enviroment.KEY_JOKE, this.listJoke)
  }
}
