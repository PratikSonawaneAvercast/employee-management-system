import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDailogComponent } from './delete-confirmation-dailog/delete-confirmation-dailog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(){
    this.dialog.open(DeleteConfirmationDailogComponent,{
      width: '390px',
      panelClass: 'confirm-dialog-Container',
      disableClose: true
    });    
  }
}
