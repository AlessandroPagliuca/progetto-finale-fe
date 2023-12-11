import { Component, OnInit } from '@angular/core';



export interface ListaCompetenze {
  competenza: string;
  ambito: string;
  numeroDiRisorse: number;
  livelloMedio: number;
  progetti:number;
  risorseDisponibili:number;

}

@Component({
  selector: 'app-competenze',
  templateUrl: './competenze.component.html',
  styleUrls: ['./competenze.component.scss']
})
export class CompetenzeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
