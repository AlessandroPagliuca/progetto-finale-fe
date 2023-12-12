import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  //metodo per cambiare la router nel mat-tab-group utilizzando (selectedTabChange)
  changeRoute( item: MatTabChangeEvent){
    if (item.index === 0) {
      this.goCompetenze();
    }else if(item.index === 1){
      this.goDipendenti();
    }
  }
  goCompetenze() {
    this.router.navigate(['competenze']);
    console.log('goCompetetnze');
    
  }
  goDipendenti() {
    this.router.navigate(['dipendenti']);
    console.log('goDipendenti');
  }
}
