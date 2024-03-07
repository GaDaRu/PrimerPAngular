import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {LocalStorageService} from "../../services/local-storage.service";
import {enviroment} from "../../../environments/enviroment";

@Component({
  selector: 'app-my-diary',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './my-diary.component.html',
  styleUrl: './my-diary.component.css'
})
export class MyDiaryComponent implements OnInit{
  valueInput: string = ''
  valueDiary: string = ''

  constructor(
    private localStorage: LocalStorageService
  ) {
  }

  ngOnInit() {
    this.valueDiary = this.localStorage.getDataLocalStorage(enviroment.KEY_DIARY) ?? ''
  }

  addDataInMyDiary() {
    if (this.valueInput.length > 0) {
      if (this.valueDiary.length > 0) {
        this.valueDiary = this.valueDiary + ', ' + this.valueInput
      } else {
        this.valueDiary = this.valueInput
      }

      this.localStorage.saveString(enviroment.KEY_DIARY, this.valueDiary)

      this.valueInput = ''
    }
  }
}
