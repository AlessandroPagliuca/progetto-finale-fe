import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    MatTableModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class SharedModule { }
