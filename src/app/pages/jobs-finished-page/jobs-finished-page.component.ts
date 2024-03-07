import {Component, OnInit} from '@angular/core';
import {enviroment} from "../../../environments/enviroment";
import {Tarea} from "../../models/tarea";
import {LocalStorageService} from "../../services/local-storage.service";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-jobs-finished-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './jobs-finished-page.component.html',
  styleUrl: './jobs-finished-page.component.css'
})
export class JobsFinishedPageComponent implements OnInit{
  listaTareas: Tarea[] = []
  jobsFinish: boolean = false

  constructor(
    private localStorage: LocalStorageService
  ) {
  }

  ngOnInit() {
    this.getJobs()
    this.checkMessage()
  }

  startJob(id?: number) {
    let jobModified = this.listaTareas.find(job => job.id == id)
    jobModified!.completada = false
    this.listaTareas.splice(this.listaTareas.findIndex(job => job.id === id), 1)

    if (jobModified != undefined) {
      this.saveInLocal(jobModified)
      this.checkMessage()
    }
  }

  saveInLocal(job: Tarea) {
    this.listaTareas.push(job)
    this.localStorage.saveArray(enviroment.KEY_JOB, this.listaTareas)
  }

  deleteJob(id?: number) {
    this.listaTareas.splice(this.listaTareas.findIndex(job => job.id === id), 1)
    this.localStorage.saveArray(enviroment.KEY_JOB, this.listaTareas)
    this.checkMessage()
  }

  getJobs() {
    this.listaTareas = this.localStorage.getArrayLocalStorage(enviroment.KEY_JOB) ?? []
  }

  checkMessage () {
    this.jobsFinish = false
    
    this.listaTareas.forEach(job => {
      if (job.completada == true) {
        this.jobsFinish = true
      }
    })
  }
}
