import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface ListaCompetenze {
  competenza: string;
  ambito: string;
  numeroDiRisorse: number;
  livelloMedio: number;
  progetti: number;
  risorseDisponibili: number;
}

const ELEMENT_DATA: ListaCompetenze[] = [
  {
    competenza:'Angular',
    ambito:'Front end',
    numeroDiRisorse:10,
    livelloMedio:3,
    progetti:5,
    risorseDisponibili:8,
  },
  {
    competenza:'Spring',
    ambito:'Back end',
    numeroDiRisorse:15,
    livelloMedio:4,
    progetti:8,
    risorseDisponibili:12,
  },
  {
  competenza:'Html',
  ambito:'Front end',
  numeroDiRisorse:5,
  livelloMedio:2,
  progetti:3,
  risorseDisponibili:2,
},
{
  competenza:'Pyton',
  ambito:'Full stack',
  numeroDiRisorse:5,
  livelloMedio:2,
  progetti:3,
  risorseDisponibili:2,
},

];

@Component({
  selector: 'app-competenze',
  templateUrl: './competenze.component.html',
  styleUrls: ['./competenze.component.scss'],
})
export class CompetenzeComponent implements OnInit {
  displayedColumns: string[] = [
    'competenza',
    'ambito',
    'numeroDiRisorse',
    'livelloMedio',
    'progetti',
    'risorseDisponibili',
    'azioni'
  ];

  dataSource = new MatTableDataSource<ListaCompetenze>(ELEMENT_DATA);

  ngOnInit(): void {
  }
}
