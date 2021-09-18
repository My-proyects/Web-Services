import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { observable, Observable } from 'rxjs' // observable se usa para marca la reactividad
@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private http: HttpClient) { }

  public listHoroscopo():Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "zodiac-sign.p.rapidapi.com",
        "x-rapidapi-key": "085e77fd67mshfedcc430a30711ap136d5bjsn5b768aa6c3fb",
      })
    }
    return this.http.get("https://zodiac-sign.p.rapidapi.com/signs", httpOptions);
  }
}
