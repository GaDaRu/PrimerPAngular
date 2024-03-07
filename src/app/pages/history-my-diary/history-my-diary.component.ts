import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "../../services/local-storage.service";
import {enviroment} from "../../../environments/enviroment";

@Component({
  selector: 'app-history-my-diary',
  standalone: true,
  imports: [],
  templateUrl: './history-my-diary.component.html',
  styleUrl: './history-my-diary.component.css'
})
export class HistoryMyDiaryComponent implements OnInit{
  diary: string = ''

  constructor(
    private localStorage: LocalStorageService
  ) {
  }

  ngOnInit() {
    this.diary = this.localStorage.getDataLocalStorage(enviroment.KEY_DIARY) ?? ''
  }

  deleteDiary() {
    this.localStorage.deleteKeyLocalStorage(enviroment.KEY_DIARY)
    this.diary = ''
  }
}
