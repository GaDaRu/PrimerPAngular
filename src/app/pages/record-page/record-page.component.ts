import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {MatCard, MatCardContent} from "@angular/material/card";
import {enviroment} from "../../../environments/enviroment";
import {LocalStorageService} from "../../services/local-storage.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-record-page',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCard,
    MatCardContent,
    NgForOf
  ],
  templateUrl: './record-page.component.html',
  styleUrl: './record-page.component.css'
})
export class RecordPageComponent implements OnInit{
  listJokes: string[] = []

  constructor(
    private localStorage: LocalStorageService
  ) {
  }

  ngOnInit(): void {
    console.log(this.localStorage.getArrayLocalStorage(enviroment.KEY_JOKE))
    this.listJokes = this.localStorage.getArrayLocalStorage(enviroment.KEY_JOKE) ?? []
  }
}
