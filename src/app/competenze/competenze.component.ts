import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CompetenzeService } from '../services/competenze.service';
import { Skill } from '../models/skill.model';
import { switchMap } from 'rxjs';
@Component({
  selector: 'app-competenze',
  templateUrl: './competenze.component.html',
  styleUrls: ['./competenze.component.scss'],
})
export class CompetenzeComponent implements OnInit {
  public skills = new MatTableDataSource<Skill[]>()
  displayedColumns: string[] = [
    'competenza',
    'ambito',
    'numeroDiRisorse',
    'livelloMedio',
    'progetti',
    'risorseDisponibili',
    'azioni'
  ];
  constructor(private compService: CompetenzeService) { }

  ngOnInit(): void {
    this.findAll();
  }
  private findAll() {
    this.compService.findAllSkills().subscribe({
      next: (value: any) => {
        this.skills = new MatTableDataSource<Skill[]>(value);
      },
      error: error => {
        console.log(error);
      },
      complete() {
        console.log('success');
      },
    })
  }

  public deleteSkill(deleteTodo: Skill) {
    this.compService.deleteSkill(deleteTodo)
      .pipe(switchMap(() => this.compService.findAllSkills()))
      .subscribe((res: any) => {
        // console.log('res', res);
        this.skills = res;
      })
  }
}
