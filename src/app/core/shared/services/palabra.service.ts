import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Palabra } from '../models/palabra';

@Injectable({
  providedIn: 'root'
})
export class PalabraService {
  palabras : Array<Palabra>;
  palabra : Palabra;
  aux:Palabra;
  //indice:number;
  constructor() { 
    this.palabra = new Palabra();
    this.palabras = new Array<Palabra>();
    this.palabras[0]={espaniol:"leon",ingles :['l','y','o','n'],url:'assets/imagenes/leon.jpg'};
    this.palabras[1]={espaniol:"mono",ingles:['m','o','n','k','e','y'],url:'assets/imagenes/mono.jpg'}
    this.palabras[2]={espaniol:"perro",ingles:['d','o','g'],url:'assets/imagenes/perro.jpg'}
    this.palabras[3]={espaniol:"gato",ingles:['c','a','t'],url:'assets/imagenes/gato.jpg'}
    this.palabras[4]={espaniol:"tigre",ingles:['t','i','g','e','r'],url:'assets/imagenes/tigre.jpg'}
  }
  getPlabras(){
    return this.palabras;
  }
  getPalabra(palabra: Palabra){
    return this.palabras.find(element => element==palabra);
  }
  getRandom(palabra: Palabra) {
    var indice: number;
    var min = 0, max: number;
    var max = this.palabras.length - 1;
    if (palabra == null) {
      this.aux = this.palabras[0];
      indice = Math.floor((Math.random() * (max - min + 1)) + min);
      this.palabras[0] = this.palabras[indice];
      this.palabras[indice] = this.aux;
      return this.palabras[0];
    } else {
      min = this.palabras.findIndex(element => element == palabra) + 1;
      if (min == max) {
        return this.palabras[max];
      } else {
        if (min > max) {
          return null;
        } else {
          indice = Math.floor(Math.random() * (max - min + 1)) + min;
          this.aux = this.palabras[min];
          this.palabras[min] = this.palabras[indice];
          this.palabras[indice] = this.aux;
          return this.palabras[min];
        }

      }

    }
  }
  
}
