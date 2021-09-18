import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { observable, Observable } from 'rxjs' // observable se usa para marca la reactividad varios cosas a la ves
@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) {
    
  }
  public listCovid():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
        "x-rapidapi-key": "a4331d3df6mshbe2899518e22a11p1cd85bjsn47637cbccc1f",
      })
    }
    return this.http.get("https://covid-19-tracking.p.rapidapi.com/v1", httpOptions);
  }
  
}
