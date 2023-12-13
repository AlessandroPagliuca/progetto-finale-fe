import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface ListaDipendenti {
  Dipendente: string;
  Profilo: string;
  Esperienza: string;
  Progetto: string;
}



@Component({
  selector: 'app-dipendenti',
  templateUrl: './dipendenti.component.html',
  styleUrls: ['./dipendenti.component.scss']
})
export class DipendentiComponent implements OnInit {

  displayedColumns: string[] = ['Dipendente', 'Profilo', 'Esperienza', 'Progetto'];

  ELEMENT_DATA: ListaDipendenti[] = [
    { Dipendente: 'Davide Postiglione', Profilo: 'Frontend', Esperienza: 'Senior', Progetto: 'Primo' },
    { Dipendente: 'Michele Finizio', Profilo: 'Backend', Esperienza: 'Senior', Progetto: 'Secondo' },
    { Dipendente: 'John Doe', Profilo: 'Fullstack', Esperienza: 'Junior', Progetto: 'Terzo' },
    { Dipendente: 'Mario Rossi', Profilo: 'DevOps', Esperienza: 'Middle', Progetto: 'Quarto' },
    { Dipendente: 'Maria Bianchi', Profilo: 'IOT', Esperienza: 'Senior', Progetto: 'Quinto' },
    { Dipendente: 'Alessandro Pagliuca', Profilo: 'Frontend', Esperienza: 'Junior', Progetto: 'Sesto' },
    { Dipendente: 'Carmine Armenante', Profilo: 'Backend', Esperienza: 'Junior', Progetto: 'Settimo' },
    { Dipendente: 'Francesco Vezzuto', Profilo: 'Frontend', Esperienza: 'Junior', Progetto: 'Ottavo' },
    { Dipendente: 'Antonio Carraturo', Profilo: 'Backend', Esperienza: 'Middle', Progetto: 'Nono' },
    { Dipendente: 'Vittoria Ferraro', Profilo: 'Frontend', Esperienza: 'Senior', Progetto: 'Decimo' },
  ];

  dataSource = new MatTableDataSource<ListaDipendenti>(this.ELEMENT_DATA);

  ngOnInit(): void {
  
  }
}





