import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  public listaNoticias(categoria:string):Observable<any>{ // aqui solo lista el contenido
    
    const httpOptions = {
      headers : new HttpHeaders({
        'X-RapidApi-Host': 'livescore6.p.rapidapi.com',
        "x-rapidapi-key": "a4331d3df6mshbe2899518e22a11p1cd85bjsn47637cbccc1f" 
      })
    }
    return this.http.get("https://livescore6.p.rapidapi.com/news/list?category="+categoria, httpOptions);
    /*return this._http.post("https://livescore6.p.rapidapi.com/news/list?category="+categoria, httpOptions);*/
  }
}
