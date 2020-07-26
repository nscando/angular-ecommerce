import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { registerUrl, baseUrl } from './../config/api';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  //Instancia el BehaviorSubjet
  //False -> No esta logueado
  //True -> Esta logueado
  authenticationState = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
    if (localStorage.getItem('token')) {
      this.authenticationState.next(true)
    }
  }
  login(datos) {
    return this.http.post(baseUrl + "/login/", datos)
  }
  register(datos) {
    return this.http.post(registerUrl, datos)
  }
  logout() {
    localStorage.removeItem('token');
    this.authenticationState.next(false)
  }
  authenticate() {
    //Cambiar el estado a true
    this.authenticationState.next(true)
  }
  isAuthenticate() {
    //Retornar estado del login 
    return this.authenticationState
  }
  isAuthenticated() {
    //Retornar estado del login 
    return this.authenticationState.value
  }
}
