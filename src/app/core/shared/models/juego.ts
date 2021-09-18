import { Palabra } from "./palabra";

export class Juego {
    puntaje:number;
    vidas:number;
    palabras:Array<Palabra>;
    constructor(puntaje?:number,vidas?:number,palabras?:Array<Palabra>){
        this.puntaje=puntaje;
        this.vidas=vidas;
        this.palabras=palabras;
    }
}
