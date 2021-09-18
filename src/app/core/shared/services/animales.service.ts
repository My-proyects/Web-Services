import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {
  palabras: Array<any>;

  constructor() { 
    this.palabras = new Array();
  }

  cargarPalabras() {
    this.palabras.push({ palabra: 'leon', palabraIngles: 'lion', url: 'http://www.imagexia.com/wp-content/uploads/2014/06/Dibujo-Leon-660x280.jpg' })
    this.palabras.push({ palabra: 'mono', palabraIngles: 'monkey', url: 'https://estaticos.muyinteresante.es/uploads/images/article/5536592a70a1ae8d775df846/dia-del-mono.jpg' })
    this.palabras.push({ palabra: 'perro', palabraIngles: 'dog', url: 'https://http2.mlstatic.com/zapatos-para-perritos-chicos-chihuahua-y-yorkshire-D_NQ_NP_357305-MLC20871271718_092016-F.jpg' })
    this.palabras.push({ palabra: 'gato', palabraIngles: 'cat', url: 'https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg' })
    this.palabras.push({ palabra: 'tigre', palabraIngles: 'tiger', url: 'https://vignette.wikia.nocookie.net/reinoanimalia/images/5/58/Tigre_de_bengala_wiki.png/revision/latest/top-crop/width/360/height/450?cb=20130303105615&path-prefix=es' })
  }

  listarPalabras() {
    return this.palabras;
  }
}
