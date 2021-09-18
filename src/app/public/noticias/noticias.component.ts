import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/core/shared/models/noticia';
import { NoticiaService } from 'src/app/core/shared/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  categoria: string;
  noticia: Noticia;
  vector_noticia: Array<Noticia>
  vector=[]
  constructor(private noticia_servicio: NoticiaService) { 
    this.noticia = new Noticia();
    this.vector_noticia = new Array<Noticia>();
    //this.cargarNoticia();
  }

  ngOnInit(): void {
   
  }
 
  public cargarNoticia() {
    let cont = 0;
    this.vector=[];
    this.vector_noticia = new Array<Noticia>();
    this.noticia_servicio.listaNoticias(this.categoria).subscribe( // llamo al metodo listnoticias 
      //sucribe es un metodo asincronico x ajax devuelve el control cuando sse termine de ejecutar la 
      //carga de las noticias
      (result) => { // resul es lo que nos devuelve el servicio de appi los las indice del json 
        //nos devuelve el segundo elemento x q el primero y el ultimo no nos sirve "art"
        console.log(result)
        result['arts'].forEach(element => {
          if (cont < 6) {

            this.noticia = new Noticia();
            this.noticia.tit = element.tit;
            this.noticia.img = element.img;
            this.noticia.con = element.con;
            this.noticia.con = this.noticia.con.substr(0,200);
            this.vector_noticia.push(this.noticia);
           
            if(cont == 2 || cont == 5){
              this.vector.push(this.vector_noticia);
              this.vector_noticia = new Array<Noticia>();
            }
            cont++;
        }
        
        });
        console.log(this.vector);
      },
      error => { alert("error en la peticion"); })

  }
}
