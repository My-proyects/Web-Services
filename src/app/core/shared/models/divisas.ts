export class Divisas {
    from_type: String;
    to_type: String;
    from_value: number;
    result: number;
    inverse:number;
    constructor(from_type?:String,to_type?:string,from_value?:number,result?:number,inverse?:number){
        this.from_type = from_type;
        this.to_type = to_type;
        this.from_value = from_value;
        this.result = result;
        this.inverse = inverse;
    }
}
