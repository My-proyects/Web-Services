export class Covid {
    Country_text:String;
    Total_Cases_text: String;
    Total_Recovered_text: string;
    Total_Deaths_text: string;
 
    constructor(Country_text?:String,Total_Cases_text?:String, Total_Recovery_text?:string, Total_Deaths_text?:string){
        this.Country_text=Country_text;
        this.Total_Cases_text=Total_Cases_text;
        this.Total_Recovered_text=Total_Recovery_text;
        this.Total_Deaths_text=Total_Deaths_text;
    }
}
