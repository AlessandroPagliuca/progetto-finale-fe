import { Component, OnInit } from '@angular/core';


export class PeriodicElement {
  Dipendente!: string;
  Profilo!: string;
  Esperienza!: string;
  Progetto!: string;
}



@Component({
  selector: 'app-dipendenti',
  templateUrl: './dipendenti.component.html',
  styleUrls: ['./dipendenti.component.scss']
})
export class DipendentiComponent implements OnInit {

  displayedColumns: string[] = ['Dipendente', 'Profilo', 'Esperienza', 'Progetto'];

  ELEMENT_DATA: PeriodicElement[] = [
    { Dipendente: 'Davide Postiglione', Profilo: 'Frontend', Esperienza: 'Senior', Progetto: 'Primo' },
    { Dipendente: 'Michele Finizio', Profilo: 'Backend', Esperienza: 'Senior', Progetto: 'Secondo' },
    { Dipendente: 'John Doe', Profilo: 'Fullstack', Esperienza: 'Junior', Progetto: 'Terzo' },
    { Dipendente: 'Mario Rossi', Profilo: 'DevOps', Esperienza: 'Middle', Progetto: 'Quarto' },
    { Dipendente: 'Maria Bianchi', Profilo: 'IOT', Esperienza: 'Senior', Progetto: 'Quinto' },
    { Dipendente: 'Carbon', Profilo: 'Neon', Esperienza: 'C', Progetto: 'Sesto' },
    { Dipendente: 'Nitrogen', Profilo: 'Neon', Esperienza: 'N', Progetto: 'Settimo' },
    { Dipendente: 'Oxygen', Profilo: 'Neon', Esperienza: 'O', Progetto: 'Ottavo' },
    { Dipendente: 'Fluorine', Profilo: 'Neon', Esperienza: 'F', Progetto: 'Nono' },
    { Dipendente: 'Neon', Profilo: 'Neon', Esperienza: 'Ne', Progetto: 'Decimo' },
  ];

  dataSource = this.ELEMENT_DATA;

  ngOnInit(): void {
  
  }
}