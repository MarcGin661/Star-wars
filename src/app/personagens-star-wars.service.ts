import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from "../environments/environments";
import { PersonagemClass } from './personagem-class';

@Injectable({
  providedIn: 'root'
})


export class PersonagensStarWarsService {

  private url = "http://localhost:3000/personagens"
  //private urlEnv =

  constructor(private _httpClient: HttpClient) { }

  public getPersonagens(): Observable<PersonagemClass[]> {
    return this._httpClient.get<PersonagemClass[]>('${API_PATH}')
  }
}
