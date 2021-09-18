import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { observable, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) {

  }
  public listMusic(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "genius.p.rapidapi.com",
        "x-rapidapi-key": "a4331d3df6mshbe2899518e22a11p1cd85bjsn47637cbccc1f",
      })
    }
    return this.http.get("https://genius.p.rapidapi.com/artists/16775/songs", httpOptions);
  }
}
