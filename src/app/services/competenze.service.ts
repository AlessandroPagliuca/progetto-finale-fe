import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CompetenzeService {

  constructor(private http: HttpClient) { }
  //chiamate per le skills/competenze
  findAllSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(environment.url + '/skills');
  }
  deleteSkill(skill: Skill): Observable<Skill> {
    let id = skill.id;
    return this.http.delete<Skill>(environment.url + `/skills/${id}`);
  }

}
