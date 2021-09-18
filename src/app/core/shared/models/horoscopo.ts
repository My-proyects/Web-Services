export class Horoscopo {
    //"content-type": "text/html; charset=utf-8",
 name: String;
 //"server": "RapidAPI-1.1.13",
 start_date: String;
 end_date: String;
 img: String;
 constructor(name?:String,start_Date?:String,end_Date?:String,img?:String){
    this.name=name;
    this.start_date=this.start_date;
    this.end_date=this.end_date;
    this.img = img;
 }
}
