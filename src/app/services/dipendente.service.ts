import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dipendente } from '../models/dipendente.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DipendenteService {

  constructor(private http: HttpClient) { }

  findAllDipendenti(): Observable<Dipendente[]> {
    return this.http.get<Dipendente[]>(environment.url + '/dipendenti');
  }
  updateDipendente(dipendente: Dipendente): Observable<Dipendente> {
    let body = dipendente;
    let id = dipendente.id;
    return this.http.put<Dipendente>(environment.url + `/dipendenti/${id}`, body);
  }
  getByIdDipendente(id: number | string): Observable<Dipendente> {
    //console.log('ID:', id);
    return this.http.get<Dipendente>(environment.url + `/detail/${id}`);
  }
}
