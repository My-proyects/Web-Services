import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Juego } from '../models/juego';
import { Palabra } from '../models/palabra';
import { PalabraService } from './palabra.service';

@Injectable({
  providedIn: 'root'
})

export class JuegoService {
  juegos:Array<Juego>;
  juego:Juego;
  constructor(private servicePalabra:PalabraService) { 
    //this.juegos.push({puntaje:null,vidas:null, palabras:this.servicePalabra.getPlabras()});
    this.juego = new Juego();
    this.juego={puntaje:null,vidas:null,palabras:  this.servicePalabra.getPlabras()};
  }
  getInicarJuego(){
    this.juego.puntaje=0;
    this.juego.vidas=6;
    return this.juego;
  }
  getRandom(palabra: Palabra){
    return this.servicePalabra.getRandom(palabra);
  }
  
}
