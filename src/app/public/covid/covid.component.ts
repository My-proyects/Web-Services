import { Component, OnInit } from '@angular/core';
import { Covid } from 'src/app/core/shared/models/covid';
import { CovidService } from 'src/app/core/shared/services/covid.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  covid: Covid;
  vectorCovid:Array<Covid>;
  constructor(private covidad_service: CovidService) { 
    this.covid= new Covid();
    this.vectorCovid = new Array<Covid>();
    this.cargarList();
  }

  public cargarList(){
    let i=0;
    this.covidad_service.listCovid().subscribe(
      (result)=>{
        result.forEach(element => {
            if(i<=4){
              this.covid = new Covid();
              this.covid.Country_text = element.Country_text;
              this.covid.Total_Cases_text = element['Total Cases_text'];
              this.covid.Total_Recovered_text = element['Total Recovered_text']
              this.covid.Total_Deaths_text = element['Total Deaths_text']
              this.vectorCovid.push(this.covid);
              i++;
              console.log(element);
              console.log(element['Total Cases_text']);
            }
        });
   
        console.log(this.vectorCovid);
       
      }
      
    )
  }
  ngOnInit(): void {

  }


}
