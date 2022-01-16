import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-delete-confirmation-dailog',
  templateUrl: './delete-confirmation-dailog.component.html',
  styleUrls: ['./delete-confirmation-dailog.component.css']
})
export class DeleteConfirmationDailogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteConfirmationDailogComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close();
  }

}

