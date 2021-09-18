import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/core/shared/models/juego';
import { Palabra } from 'src/app/core/shared/models/palabra';
import { JuegoService } from 'src/app/core/shared/services/juego.service';
import { PalabraService } from 'src/app/core/shared/services/palabra.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  letras= ['a','b','c','d','e','f','g','h','i','j','k','m','n','o','p','q','r','s','t','u','w','x','y','z'];
  letrasAdivinadas:Array<String>;
  palabra: Palabra;
  juego:Juego;
  inicio: boolean = true;
  indiceInput: string =null;

  constructor(private servicePalabra: PalabraService,private serviceJuego: JuegoService) {
    this.palabra = new Palabra();
    this.juego = new Juego();
    this.letrasAdivinadas = new Array<String>();
    //this.startGame();
   }

   ngOnInit(): void {
  }
  startGame() {
    this.juego = this.serviceJuego.getInicarJuego();
    this.palabra = null;
    this.palabra = this.serviceJuego.getRandom(this.palabra);
  }
 
  probarInput(indice: string) {
    this.indiceInput=indice;
  }

  cargarInput(letra:string){
    // if(this.indiceInput!=null){
    //   let input: any=document.getElementById(this.indiceInput);
    //   input.value=letra;
    //   this.letrasAdivinadas[this.indiceInput] = letra;
    //   if (this.verficarPalabra() == true) {
    //     this.palabra = this.serviceJuego.getRandom(this.palabra);
    //     this.letrasAdivinadas = new Array<String>();
    //     if (this.palabra == null) {
    //      // this.terminarJuego();
    //      ($('#modalWin') as any).modal('show')
    //     }
    //   } else {
    //     if (this.palabra.ingles[this.indiceInput] == letra) {
    //       this.juego.puntaje++;
    //     } else {
    //       if (letra == "") {
    //         console.log("en blanco")
    //       } else {
    //         this.juego.vidas--;
    //         if (this.juego.vidas == 0) {   
    //           ($('#exampleModalCenter') as any).modal('show')
    //         }
    //       }
    //     }
    //   }
    // }
  }

  verificar(i: string, valor: any) {
    // console.log("entro");
    // this.letrasAdivinadas[i] = valor.target.value;
    // if (this.verficarPalabra() == true) {
    //   this.palabra = this.serviceJuego.getRandom(this.palabra);
    //   this.letrasAdivinadas = new Array<String>();
    //   if (this.palabra == null) {
    //     ($('#modalWin') as any).modal('show') 
    //     //this.terminarJuego();
    //   }
    // } else {
    //   if (this.palabra.ingles[i] == valor.target.value) {
    //     this.juego.puntaje++;
    //   } else {
    //     if (valor.target.value == "") {
    //       console.log("en blanco")
    //     } else {
    //       this.juego.vidas--;
    //       if (this.juego.vidas == 0) {             
    //         ($('#exampleModalCenter') as any).modal('show')
    //       }
    //     }
    //   }
    // }
  }
 

  public verficarPalabra() {
    // var ban: boolean = true;
    // console.log(this.letrasAdivinadas)
    // console.log(this.palabra.ingles)
    // if (this.letrasAdivinadas.length == this.palabra.ingles.length) {
    //   for (let i = 0; i < this.letrasAdivinadas.length; i++) {
    //     if (this.letrasAdivinadas[i] != this.palabra.ingles[i]) {
    //       ban = false;
    //     }
    //   }
    // } else
    //   ban = false;
    // return ban;
  }
  
  
/**
 * inicia la partida
 */
  iniciarPartida() {
    // this.inicio = false;
  }
  /**
   * termina el game cuando pierda o gane
   */
  terminarJuego() {
    // this.inicio = true;
    // this.startGame();
  }


}
