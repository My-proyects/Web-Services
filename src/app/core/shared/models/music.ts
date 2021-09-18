export class Music {
    nombre_artista:String;
    nombre_cancion:String;
    letra:String;
    img:String
    constructor(nombre_artista?:String,nombre_cancion?:String,letra?:String,img?:String){
        this.nombre_artista=nombre_artista;
        this.nombre_cancion=nombre_cancion;
        this.letra=letra
        this.img=img;
    }
}
