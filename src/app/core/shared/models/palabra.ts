export class Palabra {
    espaniol: String;
    ingles:Array<String>;
    url: String;
    constructor(espaniol?:String, ingles?:Array<String>,url?:String ){
        this.espaniol=espaniol;
        this.ingles=ingles;
        this.url=url;
    }
}
