import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  changeRoute( idx: number){
    console.log(idx);
    
    if (idx === 0) {
      this.goCompetenze();
    }else{
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
