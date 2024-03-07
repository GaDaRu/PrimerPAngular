export class Tarea {
  id?: number
  nombre?: string
  descripcion?: string
  completada?: boolean

  constructor(id: number, name: string, description: string) {
    this.id = id
    this.nombre = name
    this.descripcion = description
    this.completada = false
  }
}
