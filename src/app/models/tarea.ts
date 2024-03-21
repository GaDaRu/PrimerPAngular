export interface Tarea {
  id?: number
  nombre?: string
  descripcion?: string
  completada?: Estado

  /*constructor(id: number, name: string, description: string) {
    this.id = id
    this.nombre = name
    this.descripcion = description
    this.completada = Estado.waiting
  }*/
}

export enum Estado {
  waiting,
  assigned,
  progress,
  complete
}
