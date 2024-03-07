import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "../../services/local-storage.service";
import {enviroment} from "../../../environments/enviroment";
import {FormsModule} from "@angular/forms";
import {Tarea} from "../../models/tarea";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [
    FormsModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardActions,
    NgForOf,
    NgIf
  ],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent implements OnInit{
  listaTareas: Tarea[] = []

  titulo: string = ''
  descripcion: string = ''

  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getJobs()
  }

  saveJob() {
    if (this.titulo?.length > 0 && this.descripcion?.length > 0) {
      if (this.listaTareas.length <= 0) {
        let job: Tarea = new Tarea(1, this.titulo, this.descripcion)
        this.saveInLocal(job)
      } else {
        let job: Tarea = new Tarea(-1, this.titulo, this.descripcion)
        let id = this.listaTareas[this.listaTareas.length - 1].id
        if (id != undefined) {
          job.id = id + 1
        }

        this.saveInLocal(job)
      }

      this.titulo = ''
      this.descripcion = ''
    }
  }

  finishJob(id?: number) {
    let jobModified = this.listaTareas.find(job => job.id == id)
    console.log(id, jobModified)
    jobModified!.completada = true
    this.listaTareas.splice(this.listaTareas.findIndex(job => job.id === id), 1)

    if (jobModified != undefined) {
      this.saveInLocal(jobModified)
    }
  }

  saveInLocal(job: Tarea) {
    this.listaTareas.push(job)
    this.localStorage.saveArray(enviroment.KEY_JOB, this.listaTareas)
  }

  getJobs() {
    this.listaTareas = this.localStorage.getArrayLocalStorage(enviroment.KEY_JOB) ?? []
  }

  showJobs() {
    this.router.navigate(['finished-job']).then()
  }
}
