import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs'
import { Divisas } from 'src/app/models/divisas'

@Injectable({
  providedIn: 'root'
})
export class DivisasService {
  // divisas: Divisas;
  constructor(private http: HttpClient) {
    //this.divisas = new Divisas();
  }

  public lisDivisas(divisas: Divisas): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "community-neutrino-currency-conversion.p.rapidapi.com",
        "x-rapidapi-key": "b5174a9c0emsh9eaee4de27138d1p166178jsn75feb7b65b25",

      })

    }
    return this.http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert", divisas, httpOptions);
  }
}

