import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveString(key: string, value: string) {
    localStorage.setItem(key, value)
  }

  saveArray(key: string, value: any[]) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  getDataLocalStorage(key: string) {
    return localStorage.getItem(key)
  }

  getArrayLocalStorage(key: string) {
    const data = localStorage.getItem(key)

    return data != null ? JSON.parse(data) : null
  }

  deleteKeyLocalStorage(key: string) {
    localStorage.removeItem(key)
  }

  deleteAllLocalStorage() {
    localStorage.clear()
  }
}
