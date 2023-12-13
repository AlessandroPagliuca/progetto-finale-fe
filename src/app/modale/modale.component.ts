import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.scss']
})
export class ModaleComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModaleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Skill) { }

  ngOnInit(): void {
  }
  onNoClick() {
    this.dialogRef.close();
  }

  onSumbit() {
    console.log('submit');

  }

}
