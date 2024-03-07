import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "@firebase/app-compat";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggued: boolean = true
  constructor(
    private _auth: AngularFireAuth
  ) { }

  async login(email: string, password: string) {
    try {
      return await this._auth.signInWithEmailAndPassword(email, password)
    } catch (e) {
      console.log(e)
      return null
    }
  }

  async loginGoogle() {
    try {
      this.isLoggued = true
      return await this._auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    } catch (e) {
      console.log(e)
      this.isLoggued = false
      return null
    }
  }

  async register(email: string, password: string) {
    try {
      return await this._auth.createUserWithEmailAndPassword(email, password)
    } catch (e) {
      console.log(e)
      return null
    }
  }

  async logOut() {
    await this._auth.signOut()
  }

  async getInfoUserLoggued() {
    return this._auth.authState;
  }

  async updateUser(name: string, photo: string) {
    let user = firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        user.updateProfile({
          displayName: name,
          photoURL: photo
        })
      } else {
        console.log('No hay usuario logueado')
      }
    })
  }
}
