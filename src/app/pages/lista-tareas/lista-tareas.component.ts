import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "../../services/local-storage.service";
import {enviroment} from "../../../environments/enviroment";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Estado, Tarea} from "../../models/tarea";
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
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent implements OnInit{
  listaTareas: Tarea[] = []

  estado = Estado

  formTarea = new FormGroup({
    titulo: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required)
  })

  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getJobs()
  }

  saveJob() {
    console.log(this.formTarea.value['titulo'])
    if (this.formTarea.valid) {
      if (this.listaTareas.length <= 0) {
        let job: Tarea = {
          id: 1,
          nombre: this.formTarea.value['titulo']?.toString(),
          descripcion: this.formTarea.value['descripcion']?.toString(),
          completada: Estado.waiting
        }
        this.saveInLocal(job)
      } else {
        let id = this.listaTareas[this.listaTareas.length - 1].id

        let job: Tarea = {
          nombre: this.formTarea.value['titulo']?.toString(),
          descripcion: this.formTarea.value['descripcion']?.toString(),
          completada: Estado.waiting
        }

        if (id != undefined) {
          job.id = id + 1
        }

        this.saveInLocal(job)
      }
    }

    this.formTarea.controls['titulo'].setValue('')
    this.formTarea.controls['descripcion'].setValue('')
  }

  finishJob(tarea?: Tarea) {
    if (tarea?.completada == Estado.waiting) {
      this.listaTareas.map(job => job.id == tarea.id ? job.completada = Estado.assigned : null)
    } else if (tarea?.completada == Estado.assigned) {
      this.listaTareas.map(job => job.id == tarea.id ? job.completada = Estado.progress : null)
    } else {
      this.listaTareas.map(job => job.id == tarea?.id ? job.completada = Estado.complete : null)
    }
    //this.listaTareas.map(job => job.id == id ? job.completada = Estado.complete : null)
    this.localStorage.saveArray(enviroment.KEY_JOB, this.listaTareas)
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

  getNameButton(tarea: Tarea) {
    var name = 'Asignar'
    if (tarea?.completada == Estado.assigned) {
      name = 'Comenzar tarea'
    } else if (tarea.completada == Estado.progress) {
      name = 'Terminar'
    }
    return name
  }
}
